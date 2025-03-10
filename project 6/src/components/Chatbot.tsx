import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { SearchResult } from '../data/searchData';

interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatbotProps {
  onCustomSearch: (query: string) => void;
  currentBestChoice?: SearchResult;
}

export function Chatbot({ onCustomSearch, currentBestChoice }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hi! I'm your Inspectrix assistant. I can help you find products, compare prices, and provide recommendations. What are you looking for?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [showBestChoicePrompt, setShowBestChoicePrompt] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentBestChoice && isOpen && !showBestChoicePrompt) {
      setShowBestChoicePrompt(true);
      const botMessage = {
        text: "Would you like to know why this is the best choice? (Yes/No)",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }
  }, [currentBestChoice, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const generateBestChoiceAnalysis = (product: SearchResult): string => {
    let analysis = `Here's why ${product.title} is the best choice:\n\n`;
    analysis += `1. Rating & Reviews: ${product.rating}/5 stars from ${product.reviews} customers\n`;
    if (product.price) {
      analysis += `2. Price: ${product.price} - ${product.bestPaymentMethod}\n`;
    }
    analysis += `3. Expert Analysis: ${product.aiAnalysis}\n`;
    if (product.category === 'transportation') {
      analysis += `4. Travel Info: ${product.travelInfo?.bestOption}\n`;
      analysis += `   - Estimated Time: ${product.travelInfo?.estimatedTime}\n`;
      analysis += `   - Cost: ${product.travelInfo?.estimatedCost}\n`;
    }
    return analysis;
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Handle best choice prompt response
    if (showBestChoicePrompt && currentBestChoice) {
      if (input.toLowerCase() === 'yes') {
        const analysis = generateBestChoiceAnalysis(currentBestChoice);
        const botMessage = {
          text: analysis,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      } else if (input.toLowerCase() === 'no') {
        const botMessage = {
          text: "Alright! What else would you like to know about?",
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }
      setShowBestChoicePrompt(false);
      return;
    }

    // Process other messages
    let response = '';
    if (input.toLowerCase().includes('search') || input.toLowerCase().includes('find')) {
      const searchQuery = input.replace(/search|find/i, '').trim();
      onCustomSearch(searchQuery);
      response = `I'll help you search for "${searchQuery}". Check the results above!`;
    } else if (input.toLowerCase().includes('compare')) {
      response = "I'll analyze prices and features across different retailers to find the best deal for you. What products would you like to compare?";
    } else if (input.toLowerCase().includes('recommend')) {
      response = "I can provide personalized recommendations based on your preferences. What type of product are you interested in?";
    } else if (input.toLowerCase().includes('travel') || input.toLowerCase().includes('ride')) {
      response = "I can help you find the best transportation option. Would you like to compare prices between Uber, Ola, and Rapido?";
    } else if (input.toLowerCase().includes('register') || input.toLowerCase().includes('business')) {
      response = "To register your business with Inspectrix, please visit our business portal. Would you like me to provide more information about the registration process?";
    } else {
      response = "I'm here to help you find and compare products, get recommendations, or answer any questions about shopping. What would you like to know?";
    }

    const botMessage = {
      text: response,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-96 max-w-full">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="text-lg font-semibold">Inspectrix Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.isUser
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <ReactMarkdown className="prose prose-sm">
                    {message.text}
                  </ReactMarkdown>
                  <div
                    className={`text-xs mt-1 ${
                      message.isUser ? 'text-blue-100' : 'text-gray-500'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white rounded-lg p-2 hover:bg-blue-700 transition-colors"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
