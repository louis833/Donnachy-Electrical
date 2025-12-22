import nodemailer from 'nodemailer';
import type { InsertContact } from '@shared/schema';

const smtpConfig = {
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // Dynamically check strict SSL
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

const transporter = nodemailer.createTransport(smtpConfig);

// Verify connection configuration on startup
transporter.verify(function (error, success) {
  if (error) {
    console.error('SMTP Connection Error:', error);
  } else {
    console.log('SMTP Server is ready to take our messages');
  }
});

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

  async sendContactNotification(contact: InsertContact): Promise<void> {
    const serviceTypeLabels: Record<string, string> = {
      electrical: 'General Electrical',
      'heat-pumps': 'Heat Pumps & Ducted Systems',
      solar: 'Solar & Batteries',
      maintenance: 'Maintenance & Repairs',
      other: 'Other'
    };

    // Use environment variable or fallback to the specific email
    const fromAddress = process.env.SMTP_FROM || 'scott@donnachyelectrical.com.au';

    console.log(`Attempting to send email from ${fromAddress}`);

    const mailOptions = {
      from: `"Donnachy Electrical Website" <${fromAddress}>`,
      to: process.env.CONTACT_EMAIL || 'scott@donnachyelectrical.com.au',
      replyTo: contact.email, // <--- CRITICAL: Allows you to reply to the customer!
      subject: `New Quote Request - ${serviceTypeLabels[contact.serviceType] || contact.serviceType}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #FFC107; margin-bottom: 20px;">New Quote Request</h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="margin-top: 0; color: #000;">Contact Details</h3>
            <p><strong>Name:</strong> ${this.escapeHtml(contact.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${encodeURIComponent(contact.email)}">${this.escapeHtml(contact.email)}</a></p>
            ${contact.phone ? `<p><strong>Phone:</strong> <a href="tel:${encodeURIComponent(contact.phone)}">${this.escapeHtml(contact.phone)}</a></p>` : ''}
            <p><strong>Service Type:</strong> ${serviceTypeLabels[contact.serviceType] || contact.serviceType}</p>
          </div>
          
          <div style="background: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #000;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${this.escapeHtml(contact.message)}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }

  async sendContactConfirmation(contact: InsertContact): Promise<void> {
    const fromAddress = process.env.SMTP_FROM || 'scott@donnachyelectrical.com.au';

    const mailOptions = {
      from: `"Donnachy Electrical" <${fromAddress}>`,
      to: contact.email,
      subject: 'We received your quote request - Donnachy Electrical',
      html: `
        <div style="max-width: 600px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif;">
          <h2 style="color: #FFC107; margin-bottom: 20px;">Thank you for contacting us</h2>
          <p>Hi ${this.escapeHtml(contact.name)},</p>
          <p>We have received your details and will be in touch shortly.</p>
          
          <p>Best regards,<br>
          <strong>Donnachy Electrical</strong></p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
  }
}

export const mail = new NodemailerService(); // Export as 'mail' to match likely imports