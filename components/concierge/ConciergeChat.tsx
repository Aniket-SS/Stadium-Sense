'use client';

import React, { useState } from 'react';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  locale?: string;
}

const SUGGESTED_PROMPTS = [
  'How do I get from Gate B to Section 115 step-free?',
  '¿Dónde está la sala sensorial tranquila?',
  'أين يقع المصعد المخصص للكراسي المتحركة؟',
  'What time should I leave for transit after kickoff?',
];

export function ConciergeChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: 'Welcome to FIFA World Cup 2026! Ask me for directions, step-free routes, sensory accommodations, or transit info in any language.',
    },
  ]);
  const [input, setInput] = useState('');
  const [locale, setLocale] = useState('en');
  const [loading, setLoading] = useState(false);

  const sendMessage = async (queryText?: string) => {
    const textToSend = queryText || input;
    if (!textToSend.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      locale,
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!queryText) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'concierge',
          promptInput: textToSend,
          context: { locale },
        }),
      });

      const data = await res.json();
      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: data.plainLanguageSummary || data.headline || 'I am ready to assist with your World Cup navigation.',
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `ai-err-${Date.now()}`,
          sender: 'ai',
          text: 'Network temporarily offline. Please follow venue directional signage.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col rounded-3xl bg-surface shadow-lg border border-[#1E4D33]/15 h-[620px] overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-[#1E4D33]/10 bg-canvas px-6 py-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-forest text-surface">
            <Bot className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-sm font-semibold text-obsidian">
              Multilingual GenAI Concierge
            </h2>
            <p className="text-[11px] text-obsidian/60">Auto-detects language · World Cup 2026</p>
          </div>
        </div>
        <LanguageSwitcher currentLocale={locale} onLocaleChange={setLocale} />
      </div>

      {/* Messages Feed */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex items-start gap-3 ${msg.sender === 'user' ? 'justify-end' : ''}`}
          >
            {msg.sender === 'ai' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest mt-1">
                <Sparkles className="h-3.5 w-3.5 text-pulse" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-xs sm:text-sm leading-relaxed ${
                msg.sender === 'user'
                  ? 'bg-forest text-surface rounded-br-none'
                  : 'bg-canvas text-obsidian border border-[#1E4D33]/10 rounded-bl-none'
              }`}
            >
              {msg.text}
            </div>
            {msg.sender === 'user' && (
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-obsidian text-surface mt-1">
                <User className="h-3.5 w-3.5" />
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-2 text-xs text-obsidian/60 pl-10">
            <Loader2 className="h-3.5 w-3.5 animate-spin text-pulse" />
            <span>Reasoning over stadium knowledge base...</span>
          </div>
        )}
      </div>

      {/* Suggested Prompt Pills */}
      <div className="border-t border-[#1E4D33]/10 bg-canvas/60 px-4 py-2 flex flex-wrap gap-1.5">
        {SUGGESTED_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            onClick={() => sendMessage(prompt)}
            className="rounded-full bg-surface px-3 py-1 text-[11px] font-medium text-obsidian/80 hover:text-forest hover:border-forest/40 border border-[#1E4D33]/15 transition-colors text-left truncate max-w-xs"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}
        className="border-t border-[#1E4D33]/10 bg-canvas p-4 flex items-center gap-2"
      >
        <label htmlFor="concierge-input" className="sr-only">
          Ask concierge
        </label>
        <input
          id="concierge-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about gates, accessibility, restrooms, or transit..."
          className="flex-1 rounded-full bg-surface px-4 py-2.5 text-xs sm:text-sm text-obsidian placeholder:text-obsidian/40 border border-[#1E4D33]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
        />
        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-forest text-surface hover:bg-forest/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          aria-label="Send Message"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </div>
  );
}
