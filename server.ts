import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

interface ContactInquiry {
  id: string;
  name: string;
  email: string;
  phone?: string;
  projectType: string;
  budget: string;
  message: string;
  createdAt: string;
}

const inquiries: ContactInquiry[] = [];

// Photo upload endpoint to store Rayhan.jpg directly on server
app.post("/api/upload-photo", (req, res) => {
  try {
    const { imageBase64 } = req.body;
    if (!imageBase64) {
      return res.status(400).json({ error: "No image payload provided." });
    }

    const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
    const buffer = Buffer.from(cleanBase64, "base64");

    const publicDir = path.join(process.cwd(), "public");
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true });
    }

    fs.writeFileSync(path.join(publicDir, "Rayhan.jpg"), buffer);
    fs.writeFileSync(path.join(publicDir, "rayhan.jpg"), buffer);
    fs.writeFileSync(path.join(publicDir, "profile.jpg"), buffer);

    const distDir = path.join(process.cwd(), "dist");
    if (fs.existsSync(distDir)) {
      fs.writeFileSync(path.join(distDir, "Rayhan.jpg"), buffer);
      fs.writeFileSync(path.join(distDir, "rayhan.jpg"), buffer);
      fs.writeFileSync(path.join(distDir, "profile.jpg"), buffer);
    }

    console.log("[Photo Upload] Rayhan.jpg saved successfully to public and dist directories.");
    return res.json({ success: true, url: "/Rayhan.jpg" });
  } catch (err) {
    console.error("Failed to save uploaded photo:", err);
    return res.status(500).json({ error: "Failed to save photo on server." });
  }
});

// Photo status check endpoint
app.get("/api/photo-status", (req, res) => {
  const publicPath = path.join(process.cwd(), "public", "Rayhan.jpg");
  const exists = fs.existsSync(publicPath);
  return res.json({ exists, url: exists ? "/Rayhan.jpg" : null });
});

// Contact form endpoint
app.post("/api/contact", (req, res) => {
  try {
    const { name, email, phone, projectType, budget, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    const newInquiry: ContactInquiry = {
      id: `INQ-${Date.now().toString(36).toUpperCase()}`,
      name: String(name).trim(),
      email: String(email).trim(),
      phone: phone ? String(phone).trim() : "",
      projectType: projectType || "General Inquiry",
      budget: budget || "Flexible",
      message: String(message).trim(),
      createdAt: new Date().toISOString(),
    };

    inquiries.unshift(newInquiry);
    console.log(`[New Inquiry Received] ID: ${newInquiry.id} from ${newInquiry.name} (${newInquiry.email})`);

    return res.json({
      success: true,
      message: "Thank you for reaching out! Shariful Islam Rayhan will review your inquiry and get back to you within 24 hours.",
      inquiryId: newInquiry.id,
      data: newInquiry,
    });
  } catch (error) {
    console.error("Error processing contact inquiry:", error);
    return res.status(500).json({ error: "Failed to process inquiry. Please try again." });
  }
});

// AI Assistant Chat endpoint
let aiClient: GoogleGenAI | null = null;
function getGenAI(): GoogleGenAI | null {
  if (!aiClient && process.env.GEMINI_API_KEY) {
    try {
      aiClient = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    } catch (e) {
      console.error("Failed to initialize GoogleGenAI:", e);
    }
  }
  return aiClient;
}

const SYSTEM_INSTRUCTION = `You are "Rayhan Assistant", the official AI representative for Shariful Islam Rayhan, a Senior IT Professional & Full-Stack Web Specialist currently leading IT operations at ICT International LLC in Dubai, UAE.
Shariful Islam Rayhan has over 6+ years of hands-on experience and 80+ completed projects in Web Engineering, Cloud Infrastructure, Corporate Networking (Cisco/MikroTik), and Server Administration.

Key Information:
- Location: Dubai, United Arab Emirates
- Current Role: Senior IT Professional at ICT International LLC
- Email: shariful.rayhan.bd@gmail.com
- Phone / WhatsApp: +971521246594
- Core Skills: React, Next.js, Node.js, JavaScript, Tailwind CSS, WordPress, WooCommerce, REST APIs, Cisco, MikroTik, Server Management, Cloud Solutions, Firewall & Cybersecurity.
- Service Packages:
  1. Standard Plan (AED 2,000 / one-time): Up to 5 pages, responsive, SEO fundamentals, fast loading, 1 month support.
  2. Silver Plan (AED 5,000 / one-time): Custom dynamic business portal or e-commerce, custom APIs, lead-capture AI chatbot, firewall & security setup, 3 months priority support.
  3. Premium Plan (AED 10,000 / one-time): Full enterprise web application or corporate infrastructure, advanced 24/7 intelligent AI agent, cloud deployment & CDN, comprehensive SEO, 6 months maintenance & direct priority consulting.
- Notable Projects:
  - WAMCH Medical Center Portal (wamch.ae Revamp): Modern healthcare web system with 24/7 AI chatbot, appointment routing, SEO, enterprise security.
  - ICT International Corporate Portal: High-performance business portal with responsive UI, dynamic quotation system, backend integration.
  - Al-Sahra Gadgets Platform: Multi-category tech & electronics showcase with inventory structure.
  - Enterprise Network & Security Deployment: Multi-branch LAN/WAN setup with VPN tunnels, unified firewall policies in Business Bay, Dubai.

Tone & Style:
- Professional, polite, knowledgeable, concise, and helpful.
- Offer to collect the visitor's contact details (name, email, phone) so Shariful Islam Rayhan can reach them directly.
- Emphasize availability in Dubai (UAE time zone) for local and international consultations.`;

app.post("/api/chat", async (req, res) => {
  try {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Message is required." });
    }

    const ai = getGenAI();
    if (ai) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: [
            { role: "user", parts: [{ text: `${SYSTEM_INSTRUCTION}\n\nUser conversation context: ${JSON.stringify(history || [])}\n\nVisitor Message: ${message}` }] }
          ],
        });
        const replyText = response.text || "Hello! How can I assist you with web engineering or enterprise IT solutions today?";
        return res.json({ reply: replyText });
      } catch (geminiError) {
        console.warn("Gemini API call failed, falling back to contextual engine:", geminiError);
      }
    }

    // Contextual fallback logic
    const lower = message.toLowerCase();
    let reply = "";

    if (lower.includes("price") || lower.includes("pricing") || lower.includes("cost") || lower.includes("plan") || lower.includes("rate") || lower.includes("aed")) {
      reply = `Shariful Islam Rayhan offers three transparent service tiers:
1. Standard Plan (AED 2,000): High-performance 5-page website, SEO, fast load speeds, and 1 month support.
2. Silver Plan (AED 5,000): Custom dynamic portal/e-commerce, API integrations, automated lead AI chatbot, 3 months priority support.
3. Premium Plan (AED 10,000): Enterprise web app/infrastructure, custom AI agent, cloud deployment & security hardening, 6 months dedicated consulting.

Which tier fits your goals best? You can also contact Shariful Islam Rayhan directly at +971521246594 on WhatsApp!`;
    } else if (lower.includes("it support") || lower.includes("network") || lower.includes("cisco") || lower.includes("server") || lower.includes("infrastructure") || lower.includes("firewall")) {
      reply = `Shariful Islam Rayhan specializes in enterprise IT infrastructure across Dubai and the UAE, including:
- Cisco & MikroTik corporate router/switch configuration
- Multi-branch site-to-site VPN tunnels & remote worker access
- Unified threat management (Fortinet, Sophos) & firewall hardening
- Windows & Linux server administration, backup automation, and active directory

Would you like to schedule an IT infrastructure audit for your office?`;
    } else if (lower.includes("project") || lower.includes("work") || lower.includes("portfolio") || lower.includes("wamch") || lower.includes("gadget")) {
      reply = `Key featured projects by Shariful Islam Rayhan include:
1. WAMCH Medical Center Portal (wamch.ae Revamp): Complete healthcare platform with 24/7 patient booking AI chatbot and enterprise security.
2. ICT International Corporate Portal: High-traffic Dubai enterprise portal with quotation calculation engine.
3. Al-Sahra Gadgets Platform: Tech & electronics catalog with frictionless checkout UX.
4. Business Bay Enterprise Network Deployment: Multi-branch corporate LAN/WAN setup with redundant VPNs.

You can inspect the interactive project showcase directly on this page!`;
    } else if (lower.includes("contact") || lower.includes("email") || lower.includes("phone") || lower.includes("whatsapp") || lower.includes("hire") || lower.includes("dubai")) {
      reply = `You can connect directly with Shariful Islam Rayhan:
- Location: Dubai, United Arab Emirates (ICT International LLC)
- Phone / WhatsApp: +971521246594
- Email: shariful.rayhan.bd@gmail.com

Feel free to leave your contact number and project scope here, or submit the Contact Form below!`;
    } else {
      reply = `Hello! I am Rayhan Assistant. Shariful Islam Rayhan is a Senior IT Professional & Full-Stack Web Specialist based at ICT International LLC in Dubai, UAE. 

How can we assist you today? You can ask about:
- Web Development (Next.js, React, Node.js)
- Dubai Corporate IT & Enterprise Networking (Cisco/MikroTik/Firewalls)
- Pricing Packages (Standard AED 2k, Silver AED 5k, Premium AED 10k)
- Direct Consultation & WhatsApp connection`;
    }

    return res.json({ reply });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return res.status(500).json({ error: "Failed to process chat message." });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString(), port: PORT });
});

// Vite middleware & Production static serving
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio server running on http://localhost:${PORT}`);
  });
}

startServer();
