'use client';

import React, { useState } from 'react';
import { FileText, Sparkles, Loader2, AlertCircle } from 'lucide-react';
import { OpsIncidentLog } from '@/lib/data/types';
import { Recommendation } from '@/lib/ai/types';

interface OpsDigestCardProps {
  incidents: OpsIncidentLog[];
}

export function OpsDigestCard({ incidents }: OpsDigestCardProps) {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateDigest = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'ops_digest',
          promptInput: 'Synthesize recent incident logs into an executive situation report.',
        }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error('Ops digest error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-md border border-[#1E4D33]/15 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-forest" />
            <h3 className="font-heading text-lg font-semibold text-obsidian">
              Operational Intelligence Digest
            </h3>
          </div>
          <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
            {incidents.length} Logged Events
          </span>
        </div>

        {/* Incidents feed */}
        <div className="space-y-2.5 max-h-44 overflow-y-auto pr-1">
          {incidents.map((inc) => (
            <div
              key={inc.id}
              className="rounded-xl bg-canvas p-2.5 border border-[#1E4D33]/10 text-xs"
            >
              <div className="flex items-center justify-between font-semibold text-obsidian mb-0.5">
                <span className="flex items-center gap-1">
                  <AlertCircle className="h-3.5 w-3.5 text-pulse" />
                  {inc.id} ({inc.category.toUpperCase()})
                </span>
                <span
                  className={`text-[10px] uppercase font-bold ${
                    inc.status === 'active' ? 'text-red-600' : 'text-forest'
                  }`}
                >
                  {inc.status}
                </span>
              </div>
              <p className="text-obsidian/75 truncate">{inc.summary}</p>
            </div>
          ))}
        </div>

        {/* AI SITREP */}
        {recommendation && (
          <div className="mt-4 rounded-2xl bg-forest/5 p-4 border border-forest/20">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-forest mb-1">
              <Sparkles className="h-3.5 w-3.5 text-pulse" />
              <span>{recommendation.headline}</span>
            </div>
            <p className="text-xs text-obsidian/80 mb-2">{recommendation.plainLanguageSummary}</p>
            <ul className="list-disc pl-4 space-y-1 text-xs text-obsidian/90">
              {recommendation.structuredActionItems.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <button
        onClick={handleGenerateDigest}
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs font-semibold text-surface shadow-sm hover:bg-forest/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-pulse" />
        ) : (
          <FileText className="h-4 w-4 text-pulse" />
        )}
        <span>Generate AI Situation Report (SITREP)</span>
      </button>
    </div>
  );
}
