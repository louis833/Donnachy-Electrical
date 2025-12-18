import { google } from 'googleapis';
import type { InsertContact } from '@shared/schema';
import type { EmailService } from './email';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-mail',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Gmail not connected');
  }
  return accessToken;
}

async function getUncachableGmailClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.gmail({ version: 'v1', auth: oauth2Client });
}

function createMessage(to: string, subject: string, htmlBody: string, from: string) {
  const email = [
    `From: ${from}`,
    `To: ${to}`,
    `Subject: ${subject}`,
    `MIME-Version: 1.0`,
    `Content-Type: text/html; charset="UTF-8"`,
    '',
    htmlBody
  ].join('\n');

  return Buffer.from(email).toString('base64').replace(/\+/g, '-').replace(/\//g, '_');
}

export class GmailService implements EmailService {
  private escapeHtml(text: string): string {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  async sendContactNotification(contact: InsertContact): Promise<void> {
    try {
      const gmailClient = await getUncachableGmailClient();
      
      const serviceTypeLabels: Record<string, string> = {
        residential: 'Residential Installation',
        commercial: 'Commercial Installation', 
        maintenance: 'Maintenance & Support',
        financing: 'Financing Options',
        other: 'Other'
      };

      const htmlBody = `
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
      `;

      const message = createMessage(
        process.env.CONTACT_EMAIL || 'scott@donnachyelectrical.com.au',
        `New Solar Quote Request - ${serviceTypeLabels[contact.serviceType]}`,
        htmlBody,
        'noreply@donnachyelectrical.com.au'
      );

      await gmailClient.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: message,
        },
      });

      console.log('Notification email sent successfully via Gmail');
    } catch (error) {
      console.error('Failed to send notification email via Gmail:', error);
      throw error;
    }
  }

  async sendContactConfirmation(contact: InsertContact): Promise<void> {
    try {
      const gmailClient = await getUncachableGmailClient();

      const htmlBody = `
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
            <p style="margin: 5px 0 0 0;">Call us directly on <a href="tel:+61361596392" style="color: #FFC107; text-decoration: none;">03 6159 6392</a></p>
          </div>
          
          <p>Best regards,<br>
          <strong>Scott Donnachy</strong><br>
          Donnachy Electrical – Solar & Battery Specialists<br>
          CEC Accredited Installer & Designer</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #dee2e6; color: #6c757d; font-size: 12px;">
            <p><strong>Donnachy Electrical Pty Ltd</strong> | ABN 91 639 014 850</p>
            <p>20 Rene Rd, Summerhill TAS 7250 | Phone: 03 6159 6392</p>
            <p>Email: scott@donnachyelectrical.com.au</p>
            <p>Servicing all of Tasmania's solar & battery needs</p>
          </div>
        </div>
      `;

      const message = createMessage(
        contact.email,
        'Thank you for your solar quote request - Donnachy Electrical',
        htmlBody,
        'scott@donnachyelectrical.com.au'
      );

      await gmailClient.users.messages.send({
        userId: 'me',
        requestBody: {
          raw: message,
        },
      });

      console.log('Confirmation email sent successfully via Gmail');
    } catch (error) {
      console.error('Failed to send confirmation email via Gmail:', error);
      throw error;
    }
  }
}

export const gmailService = new GmailService();
