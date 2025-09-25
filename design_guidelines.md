# Design Guidelines for Donnachy Electrical Marketing Website

## Design Approach
**Reference-Based Approach**: Drawing inspiration from clean, professional service websites like Airbnb and modern solar company sites. Focus on trust-building through minimalist design with strategic accent colors.

## Core Design Elements

### A. Color Palette
**Light Mode:**
- Primary: 0 0% 0% (Black), 0 0% 100% (White)
- Accent (CTA): 45 100% 51% (Sun-inspired Yellow/Orange #FFC107)
- Neutral Grays: 0 0% 95%, 0 0% 85%, 0 0% 60%

**Dark Mode:**
- Primary: 0 0% 100% (White), 0 0% 8% (Dark Background)
- Accent: 45 100% 60% (Brighter yellow for contrast)
- Neutral Grays: 0 0% 15%, 0 0% 25%, 0 0% 40%

### B. Typography
- **Headings**: Montserrat ExtraBold (800) / Poppins Bold (700)
- **Body Text**: Inter Regular (400) / Poppins Regular (400)
- **Hierarchy**: H1 (3xl-4xl), H2 (2xl-3xl), H3 (xl-2xl), Body (base-lg)

### C. Layout System
**Tailwind Spacing Primitives**: 2, 4, 6, 8, 12, 16, 24, 32
- Consistent use of p-6, m-8, space-y-12, gap-16 patterns
- Container max-width: 7xl with px-6 padding

### D. Component Library

**Navigation**: Clean header with logo left, navigation right, prominent CTA button
**Hero Section**: Full-width with large typography, CEC badge, prominent quote button
**Services**: Grid layout (2x2 on desktop, stacked mobile) with service icons
**Proof Section**: Statistics display with large numbers and descriptive text
**Contact Form**: Two-column layout (form left, contact info right)
**Buttons**: Primary (yellow accent), Secondary (outline), sizes sm/base/lg

## Visual Treatment

### Background & Gradients
- Clean white backgrounds with subtle gray section breaks
- Minimal gradient use: Hero section could feature subtle radial gradient from yellow to orange (45 100% 51% to 25 100% 45%)
- Service cards with gentle hover elevation effects

### Professional Service Aesthetic
- High contrast for readability and trust
- Generous whitespace for premium feel
- Sharp, clean lines with subtle rounded corners (rounded-lg, rounded-xl)
- Focus on typography hierarchy over decorative elements

## Images
**Large Hero Image**: Yes - Professional solar panel installation photo as background
**Service Images**: Four supporting images for each service type
**Placement**: Hero background, service card thumbnails, testimonial section background overlay

**Image Specifications**:
- Hero: 1920x1080 solar panels on residential roof
- Services: 400x300 each (residential home, commercial building, maintenance work, financing consultation)
- All images should convey professionalism and Australian setting when possible

## Key Design Principles
1. **Trust & Reliability**: Clean, professional aesthetic with consistent branding
2. **Local Authenticity**: Tasmania-focused imagery and messaging
3. **Clear Hierarchy**: Strategic use of color, typography, and spacing
4. **Conversion Focus**: Prominent, accessible quote request functionality
5. **Mobile-First**: Responsive design with sticky mobile CTA

## Critical Constraints
- Maximum 5 sections total (Hero, Services, Proof, Contact, Footer)
- Single-viewport hero with immediate value proposition
- CEC accreditation prominently displayed
- Professional service industry standards maintained throughout