# Overview

This is a professional marketing website for Donnachy Electrical, a solar and battery installation company based in Tasmania, Australia. The website is built as a modern React application with an Express backend, designed for lead generation and customer engagement. It features a complete contact form system with email notifications, responsive design optimized for all devices, and comprehensive SEO implementation.

The site showcases Donnachy Electrical's services including residential and commercial solar installations, maintenance and support, and financing options. It emphasizes their CEC accreditation and 15+ years of experience to build trust with potential customers.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Comprehensive design system built with Radix UI primitives and shadcn/ui components
- **Styling**: Tailwind CSS with custom design tokens for consistent branding
- **State Management**: TanStack Query for server state management and data fetching
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing

## Backend Architecture  
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for type safety across the full stack
- **API Design**: RESTful endpoints with structured error handling and rate limiting
- **Validation**: Zod schemas for request/response validation and type inference
- **Email Service**: Nodemailer with SMTP configuration for contact form notifications

## Design System
- **Color Palette**: Professional black/white primary colors with sun-inspired yellow/orange accent (#FFC107)
- **Typography**: Montserrat for headings, Inter for body text with clear hierarchy
- **Layout**: Mobile-first responsive design using Tailwind's spacing primitives
- **Components**: Reusable UI components with consistent hover states and visual treatments

## Data Storage
- **Database**: PostgreSQL with Drizzle ORM for type-safe database operations
- **Schema**: Contact submissions stored with full form data and timestamps
- **Connection**: Neon serverless PostgreSQL for cloud database hosting
- **Migrations**: Drizzle Kit for database schema management

## Email System
- **Service**: Nodemailer with configurable SMTP settings
- **Templates**: HTML email templates for both business notifications and customer confirmations
- **Configuration**: Environment-based SMTP setup supporting Gmail and other providers
- **Error Handling**: Graceful fallback ensuring form submission succeeds even if email fails

## Security & Performance
- **Rate Limiting**: Express rate limiting for contact form abuse prevention (5 submissions per 15 minutes)
- **Validation**: Server-side validation with Zod schemas matching frontend validation
- **SEO Optimization**: Comprehensive meta tags, Open Graph, JSON-LD schema, and semantic HTML
- **Performance**: Optimized images, lazy loading, and efficient asset bundling with Vite

## Development Experience
- **Type Safety**: Full-stack TypeScript with shared schemas between client and server
- **Hot Reload**: Vite development server with HMR for rapid development iteration
- **Error Handling**: Runtime error overlay in development with comprehensive error boundaries
- **Path Aliases**: Configured import aliases for clean, maintainable code organization

# External Dependencies

## Core Framework Dependencies
- **React**: UI framework with hooks and modern patterns
- **Express**: Node.js web application framework for the backend API
- **Vite**: Modern build tool and development server with TypeScript support

## Database & ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with automatic migration generation
- **@neondatabase/serverless**: Serverless PostgreSQL driver for cloud database connections
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI Component Libraries
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives including dialogs, forms, navigation, and interactive components
- **Tailwind CSS**: Utility-first CSS framework for responsive design and consistent styling
- **Lucide React**: Modern icon library with tree-shakable SVG icons

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: TypeScript-first schema validation for runtime type safety
- **@hookform/resolvers**: Integration between React Hook Form and validation libraries

## Email Service
- **Nodemailer**: Email sending library with SMTP support for contact form notifications
- **@types/nodemailer**: TypeScript definitions for email service integration

## State Management & Data Fetching
- **TanStack Query**: Server state management with caching, background updates, and error handling
- **Class Variance Authority**: Utility for creating component variants with consistent styling

## Development Tools
- **TypeScript**: Static type checking across the entire application stack
- **ESBuild**: Fast bundler for production builds and server-side code compilation
- **PostCSS**: CSS processing with Tailwind CSS and Autoprefixer plugins