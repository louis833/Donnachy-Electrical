import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import rateLimit from "express-rate-limit";
import { storage } from "./storage";
import { mail } from "./email";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

// Rate limiting for contact form - 5 submissions per 15 minutes per IP
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req: Request, res: Response) => {
    res.status(429).json({
      success: false,
      message: "Too many contact form submissions. Please try again in 15 minutes."
    });
  },
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Set trust proxy for rate limiting behind proxies/CDNs
  app.set('trust proxy', 1);

  // Contact form submission endpoint
  app.post("/api/contact", contactLimiter, async (req, res) => {
    try {
      // Validate request body using Zod schema
      const validatedData = insertContactSchema.parse(req.body);

      // Store contact in storage
      const contact = await storage.createContact(validatedData);

      // Send notification email to business owner
      try {
        await mail.sendContactNotification(validatedData);
        console.log("Notification email sent successfully");
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Continue - don't fail the request if notification email fails
      }

      // Send confirmation email to customer
      try {
        await mail.sendContactConfirmation(validatedData);
        console.log("Confirmation email sent successfully");
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Continue - don't fail the request if confirmation email fails
      }

      // Return success response
      res.status(201).json({
        success: true,
        message: "Thank you for your inquiry! We'll be in touch within 24 hours.",
        id: contact.id
      });

    } catch (error) {
      console.error("Contact form submission error:", error);

      if (error instanceof z.ZodError) {
        // Validation errors
        return res.status(400).json({
          success: false,
          message: "Please check your form data and try again.",
          errors: error.errors.map(err => ({
            field: err.path.join('.'),
            message: err.message
          }))
        });
      }

      // Generic server error
      res.status(500).json({
        success: false,
        message: "Something went wrong. Please try again later or contact us directly."
      });
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({
      status: "healthy",
      timestamp: new Date().toISOString(),
      service: "Donnachy Electrical Contact API"
    });
  });

  const httpServer = createServer(app);

  return httpServer;
}
