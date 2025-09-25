# Donnachy Electrical - Solar & Battery Specialists Website

A professional marketing website for Donnachy Electrical, featuring a modern React frontend with Express backend, built for lead generation and customer engagement.

## 🌟 Features

- **Professional Design**: Award-winning marketing design with brand-consistent styling
- **Contact Form**: Fully functional contact form with email notifications
- **Responsive**: Mobile-first design that works on all devices
- **SEO Optimized**: Proper meta tags, Open Graph, and JSON-LD schema
- **Accessible**: WCAG AA+ compliant with semantic HTML and ARIA labels
- **Performance**: Optimized images, lazy loading, and fast load times

## 🚀 Quick Start

1. **Clone and Install**
   ```bash
   npm install
   ```

2. **Configure Email (Required for Contact Form)**
   ```bash
   cp .env.example .env
   # Edit .env with your SMTP settings (see instructions below)
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:5000`

## 📧 Email Configuration

The contact form requires SMTP configuration to send emails. Copy `.env.example` to `.env` and configure:

### Gmail Setup (Recommended)
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to App passwords
   - Select "Mail" and generate password
   - Use this password in your `.env` file

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-generated-app-password
SMTP_FROM=noreply@donnachyelectrical.com.au
CONTACT_EMAIL=scott@donnachyelectrical.com.au
```

### Testing Email Configuration
Submit the contact form and check:
- Server logs for email sending status
- Your email inbox for notifications
- Customer receives confirmation email

## 🏗️ Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/         # Page components
│   │   └── lib/           # Utilities
│   └── index.html         # Entry point with SEO tags
├── server/                # Express backend
│   ├── routes.ts         # API endpoints
│   ├── email.ts          # Email service
│   └── storage.ts        # Data storage
├── shared/               # Shared types and schemas
└── .env.example         # Environment configuration template
```

## 🎨 Branding

- **Colors**: Black (#000000), White (#FFFFFF), Yellow accent (#FFC107)
- **Typography**: Montserrat (headings), Inter/Poppins (body)
- **Logo**: Text-based wordmark "Donnachy Electrical – Solar & Battery Specialists"

## 🔧 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## 📱 Features Overview

### Hero Section
- Compelling headline with CEC accreditation badge
- Call-to-action for quote requests
- Trust indicators (15+ years, 1,200+ panels)

### Services Section
- Residential and commercial installation
- Maintenance and support
- Financing options

### Social Proof
- Customer statistics
- Testimonials
- CEC accreditation

### Contact Form
- Full validation with field-specific errors
- Rate limiting (5 submissions per 15 minutes)
- Dual email system (notification + confirmation)
- Success/error state handling

## 🚦 Rate Limiting

Contact form is rate-limited to prevent spam:
- 5 submissions per 15 minutes per IP address
- Returns helpful error message when limit exceeded
- Configurable through express-rate-limit middleware

## 🔒 Security Features

- Input validation with Zod schemas
- HTML injection prevention in emails
- Rate limiting for contact form
- CSRF protection through proper headers
- Trust proxy configuration for deployment

## 🌐 Deployment

The application is ready for deployment on Replit or any Node.js hosting platform:

1. Ensure all environment variables are configured
2. The app runs on port 5000 by default
3. Frontend and backend are served from the same port
4. Static assets are optimized for production

## 📞 Business Information

- **Business**: Donnachy Electrical Pty Ltd
- **ABN**: 91 639 014 850  
- **Phone**: 0409 820 219
- **Email**: scott@donnachyelectrical.com.au
- **Address**: 20 Rene Rd, Summerhill TAS 7250
- **Service Area**: All of Tasmania

## 🛠️ Development

Built with modern technologies:
- **Frontend**: React 18, TypeScript, Tailwind CSS, Vite
- **Backend**: Express.js, Nodemailer, Zod validation
- **UI Components**: shadcn/ui with Radix primitives
- **Email**: HTML templates with fallback text
- **Validation**: Client-side and server-side with Zod

## 📈 SEO & Analytics

- Optimized title tags and meta descriptions
- Open Graph and Twitter Card support
- JSON-LD LocalBusiness schema
- Performance optimizations for Core Web Vitals
- Ready for Google Analytics integration

## 🎯 Conversion Optimization

- Clear call-to-action buttons throughout
- Sticky mobile CTA for quote requests  
- Professional trust indicators
- Streamlined contact form process
- Immediate email confirmations

---

**Donnachy Electrical – Solar & Battery Specialists**  
*Reliable Solar & Battery Solutions Across Tasmania*