import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

const smtpConfig = {
  host: process.env.SMTP_HOST || 'localhost',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // Use STARTTLS for port 587
  requireTLS: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

export interface EmailService {
  sendContactNotification(contact: InsertContact): Promise<void>;
  sendContactConfirmation(contact: InsertContact): Promise<void>;
}

export class NodemailerService implements EmailService {
  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  private isSmtpConfigured(): boolean {
    return !!(process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS);
  }

  async sendContactNotification(contact: InsertContact): Promise<void> {
    if (!this.isSmtpConfigured()) {
      console.log('SMTP not configured - Email would be sent to scott@donnachyelectrical.com.au:', {
        from: 'noreply@donnachyelectrical.com.au',
        to: 'scott@donnachyelectrical.com.au',
        subject: `New Solar Quote Request - ${contact.serviceType}`,
        contactName: contact.name,
        contactEmail: contact.email,
        contactPhone: contact.phone,
        message: contact.message
      });
      return;
    }
    const serviceTypeLabels = {
      residential: 'Residential Installation',
      commercial: 'Commercial Installation', 
      maintenance: 'Maintenance & Support',
      financing: 'Financing Options',
      other: 'Other'
    };

    const mailOptions = {
      from: process.env.SMTP_FROM || 'noreply@donnachyelectrical.com.au',
      to: process.env.CONTACT_EMAIL || 'scott@donnachyelectrical.com.au',
      subject: `New Solar Quote Request - ${serviceTypeLabels[contact.serviceType]}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #FFC107; margin-bottom: 20px;">New Quote Request from Donnachy Electrical Website</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #000;">Contact Details</h3>
            <p><strong>Name:</strong> ${this.escapeHtml(contact.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(contact.email)}">${this.escapeHtml(contact.email)}</a></p>
            ${contact.phone ? `<p><strong>Phone:</strong> <a href="tel:${encodeURIComponent(contact.phone)}">${this.escapeHtml(contact.phone)}</a></p>` : ''}
            <p><strong>Service Type:</strong> ${serviceTypeLabels[contact.serviceType]}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #000;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${this.escapeHtml(contact.message)}</p>
          </div>
          
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p>This email was sent from the Donnachy Electrical website contact form.</p>
            <p>Received at: ${new Date().toLocaleString('en-AU', { timeZone: 'Australia/Hobart' })}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }

  async sendContactConfirmation(contact: InsertContact): Promise<void> {
    if (!this.isSmtpConfigured()) {
      console.log('SMTP not configured - Confirmation email would be sent to:', contact.email);
      return;
    }
    const mailOptions = {
      from: process.env.SMTP_FROM || 'scott@donnachyelectrical.com.au',
      to: contact.email,
      subject: 'Thank you for your solar quote request - Donnachy Electrical',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #FFC107; margin-bottom: 20px;">Thank you for contacting Donnachy Electrical</h2>
          
          <p>Hi ${this.escapeHtml(contact.name)},</p>
          
          <p>Thank you for your interest in our solar and battery solutions! We've received your quote request and will get back to you within 24 hours.</p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #000;">What happens next?</h3>
            <ul style="color: #495057; line-height: 1.6;">
              <li>We'll review your requirements and property details</li>
              <li>A solar specialist will contact you to discuss your needs</li>
              <li>We'll arrange a free on-site assessment if suitable</li>
              <li>You'll receive a customized quote within 48 hours</li>
            </ul>
          </div>
          
          <div style="background: #fff3cd; padding: 15px; border-radius: 8px; border-left: 4px solid #FFC107; margin: 20px 0;">
            <p style="margin: 0;"><strong>Need to speak with someone urgently?</strong></p>
            <p style="margin: 5px 0 0 0;">Call us directly on <a href="tel:+61409820219" style="color: #FFC107; text-decoration: none;">0409 820 219</a></p>
          </div>
          
          <p>Best regards,<br>
          <strong>Scott Donnachy</strong><br>
          Donnachy Electrical – Solar & Battery Specialists<br>
          CEC Accredited Installer & Designer</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p><strong>Donnachy Electrical Pty Ltd</strong> | ABN 91 639 014 850</p>
            <p>20 Rene Rd, Summerhill TAS 7250 | Phone: 0409 820 219</p>
            <p>Email: scott@donnachyelectrical.com.au</p>
            <p>Servicing all of Tasmania's solar & battery needs</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
}

export const emailService = new NodemailerService();