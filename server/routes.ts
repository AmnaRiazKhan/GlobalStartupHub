import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the application
  
  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      const { fullName, email, phone, company, interest, message } = req.body;
      
      // Validate required fields
      if (!fullName || !email || !phone || !interest || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      // In a real application, we might:
      // 1. Store the contact in a database
      // 2. Send an email notification
      // 3. Create a task in a CRM system
      
      // For now, we'll just return a success response
      res.status(200).json({ 
        message: 'Contact form submitted successfully',
        data: {
          id: Date.now().toString(),
          submittedAt: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error submitting contact form:', error);
      res.status(500).json({ message: 'Error processing your request' });
    }
  });
  
  // Consultation booking
  app.post('/api/consultation', async (req, res) => {
    try {
      const { name, email, country, businessStage } = req.body;
      
      // Validate required fields
      if (!name || !email || !country || !businessStage) {
        return res.status(400).json({ message: 'Missing required fields' });
      }
      
      // Return success response
      res.status(200).json({ 
        message: 'Consultation scheduled successfully',
        data: {
          id: Date.now().toString(),
          scheduledAt: new Date().toISOString()
        }
      });
    } catch (error) {
      console.error('Error scheduling consultation:', error);
      res.status(500).json({ message: 'Error processing your request' });
    }
  });
  
  // Newsletter subscription
  app.post('/api/subscribe', async (req, res) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ message: 'Email is required' });
      }
      
      // Return success response
      res.status(200).json({ 
        message: 'Subscribed to newsletter successfully' 
      });
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      res.status(500).json({ message: 'Error processing your request' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
