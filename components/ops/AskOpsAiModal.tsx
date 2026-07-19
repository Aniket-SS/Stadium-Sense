'use client';

import React, { useState } from 'react';
import { Send, Sparkles, Loader2, Command } from 'lucide-react';
import { Recommendation } from '@/lib/ai/types';

const SAMPLE_OPS_QUESTIONS = [
  'Should we open overflow parking lot C2 to relieve rail congestion?',
  'How should we balance turnstile queues between Gate B and Gate A?',
  'Recommend staff marshal deployment for post-match departure.',
];

export function AskOpsAiModal() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleAsk = async (queryText?: string) => {
    const textToSend = queryText || question;
    if (!textToSend.trim() || loading) return;

    setLoading(true);
    if (!queryText) setQuestion('');
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'decision_support',
          promptInput: textToSend,
        }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error('Ask Ops AI error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-obsidian p-6 sm:p-8 text-surface shadow-xl">
      <div className="flex items-center justify-between border-b border-surface/15 pb-4 mb-6">
        <div className="flex items-center gap-2.5">
          <Command className="h-5 w-5 text-pulse" />
          <div>
            <h2 className="font-heading text-lg font-semibold text-surface">
              Ask Ops AI — Real-Time Decision Support
            </h2>
            <p className="text-xs text-surface/60">
              Grounded in current crowd, transit, weather, and venue telemetry
            </p>
          </div>
        </div>
        <span className="rounded-full bg-pulse/20 px-3 py-1 text-xs font-mono text-pulse-light">
          Command Access Active
        </span>
      </div>

      {/* Suggested Questions */}
      <div className="mb-6 flex flex-wrap gap-2">
        {SAMPLE_OPS_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => handleAsk(q)}
            className="rounded-full bg-surface/10 px-3.5 py-1.5 text-xs text-surface/80 hover:bg-pulse hover:text-obsidian transition-colors text-left"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Free-text input */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="flex items-center gap-2"
      >
        <label htmlFor="ask-ops-input" className="sr-only">
          Ask Ops AI Question
        </label>
        <input
          id="ask-ops-input"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask free-text strategic question (e.g. Should we open overflow parking?)..."
          className="flex-1 rounded-full bg-surface/10 px-5 py-3 text-xs sm:text-sm text-surface placeholder:text-surface/40 border border-surface/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="inline-flex h-11 px-6 items-center justify-center gap-2 rounded-full bg-pulse text-obsidian font-semibold hover:bg-pulse/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
        >
          {loading ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          <span>Reason</span>
        </button>
      </form>

      {/* Recommendation display */}
      {recommendation && (
        <div className="mt-6 rounded-2xl bg-surface/10 p-5 border border-pulse/30" role="status" aria-live="polite">
          <div className="flex items-center justify-between mb-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-pulse">
              <Sparkles className="h-4 w-4" />
              {recommendation.headline}
            </span>
            <span className="text-[10px] font-mono text-surface/60">
              Confidence: {Math.round(recommendation.confidenceScore * 100)}%
            </span>
          </div>
          <p className="text-xs sm:text-sm text-surface/90 leading-relaxed mb-3">
            {recommendation.plainLanguageSummary}
          </p>
          <div className="space-y-1 text-xs text-surface/80 border-t border-surface/10 pt-3">
            <span className="font-semibold text-pulse block mb-1">Recommended Execution Steps:</span>
            <ul className="list-disc pl-4 space-y-1">
              {recommendation.structuredActionItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
