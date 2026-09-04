import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquare, 
  ChevronDown, 
  RefreshCw, 
  CheckCircle2, 
  Phone, 
  Mail, 
  ArrowRight,
  User
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [contactCaptured, setContactCaptured] = useState(false);

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-1',
      role: 'assistant',
      text: `Hello! I'm Rayhan Assistant, Shariful Islam Rayhan's AI agent. I can guide you through our Web Engineering capabilities, Corporate IT Infrastructure solutions in Dubai, and transparent service packages. How can I help you today?`,
      timestamp: 'Just now',
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickPrompts = [
    "Inquire about Pricing",
    "Book IT Support in Dubai",
    "View Latest Projects",
    "Contact via WhatsApp"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputMessage;
    if (!query.trim()) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          history: messages.slice(-6).map((m) => ({ role: m.role, text: m.text })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const botReply: ChatMessage = {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          text: data.reply || "Thank you for reaching out! How else can I assist with your IT or web goals?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages((prev) => [...prev, botReply]);
      } else {
        throw new Error("Chat response failed");
      }
    } catch (err) {
      // Graceful offline fallback
      const lower = query.toLowerCase();
      let fallbackText = "Shariful is currently available for corporate IT consulting and web development projects in Dubai, UAE. Would you like to reach him directly on WhatsApp at +971521246594 or drop an inquiry in the form below?";
      
      if (lower.includes("price") || lower.includes("pricing") || lower.includes("cost") || lower.includes("aed")) {
        fallbackText = "Shariful's core packages are:\n• Standard Plan: AED 2,000 (Fast 5-page site & SEO)\n• Silver Plan: AED 5,000 (Dynamic portal/e-commerce & AI chatbot)\n• Premium Plan: AED 10,000 (Enterprise web app & custom AI agent)\nWould you like a custom quotation?";
      } else if (lower.includes("project") || lower.includes("portfolio") || lower.includes("wamch")) {
        fallbackText = "Recent flagship projects include WAMCH Medical Center Portal (wamch.ae revamp), ICT International Corporate Portal, and Business Bay Enterprise Network Deployment. You can check the case studies above!";
      }

      setMessages((prev) => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          role: 'assistant',
          text: fallbackText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50">
      {/* Floating Toggle Pill Button */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          onClick={() => {
            setIsOpen(true);
            setHasInteracted(true);
          }}
          aria-label="Open Rayhan Assistant AI Chatbot"
          className="flex items-center space-x-3.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-blue-500/20 p-2 pr-5 rounded-full shadow-2xl cursor-pointer hover:border-blue-500/50 transition-all active:scale-95"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-sm relative">
            <Bot className="w-5 h-5" />
            <span className="absolute top-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-white dark:border-zinc-900"></span>
          </div>
          <div className="text-left">
            <p className="text-[10px] text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
              Rayhan Assistant
            </p>
            <p className="text-xs text-slate-700 dark:text-zinc-300">
              How can I help you today?
            </p>
          </div>
        </motion.button>
      )}

      {/* Expandable Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.25 }}
            className="w-[92vw] sm:w-[400px] h-[540px] max-h-[85vh] rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-zinc-900 text-white border-b border-zinc-800 flex items-center justify-between shadow-xs shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center shadow-xs">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold leading-tight text-white">Rayhan Assistant</h3>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Online • Dubai, UAE</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close Chat"
                className="p-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick Prompts Bar */}
            <div className="p-2.5 bg-slate-50 dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 shrink-0">
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                {quickPrompts.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSendMessage(prompt)}
                    className="shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-white dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-700 hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/40 dark:bg-zinc-950/40">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div
                    className={`max-w-[82%] rounded-2xl px-3.5 py-2.5 text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none'
                        : 'bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 border border-slate-200/80 dark:border-zinc-800 rounded-bl-none'
                    }`}
                  >
                    {msg.text}
                    <span
                      className={`block text-[9px] mt-1 ${
                        msg.role === 'user' ? 'text-blue-200 text-right' : 'text-slate-400 dark:text-zinc-500'
                      }`}
                    >
                      {msg.timestamp}
                    </span>
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-lg bg-slate-200 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isLoading && (
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950/80 flex items-center justify-center">
                    <RefreshCw className="w-3.5 h-3.5 animate-spin text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Rayhan Assistant is generating response...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Direct Quick Contact CTA in Chat */}
            <div className="px-4 py-2 bg-slate-100 dark:bg-zinc-900/90 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between text-xs">
              <span className="text-[11px] text-slate-500 dark:text-zinc-400">Prefer direct human contact?</span>
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-1"
              >
                <span>WhatsApp Shariful</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-white dark:bg-[#121217] border-t border-slate-200 dark:border-zinc-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask about web, networks, Dubai IT..."
                  className="flex-1 px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-900 dark:text-zinc-100 focus:outline-hidden focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  aria-label="Send message"
                  className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
