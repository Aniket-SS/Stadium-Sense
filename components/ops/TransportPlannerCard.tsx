'use client';

import React, { useState } from 'react';
import { Bus, Sparkles, Loader2, Clock } from 'lucide-react';
import { TransitLineStatus } from '@/lib/data/types';
import { Recommendation } from '@/lib/ai/types';

interface TransportPlannerCardProps {
  transitLines: TransitLineStatus[];
  kickoffTime: string;
}

export function TransportPlannerCard({ transitLines, kickoffTime }: TransportPlannerCardProps) {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateDeparture = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'transport',
          promptInput: `Recommend optimal departure timing for ${kickoffTime}`,
        }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error('Transport reasoning error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-md border border-[#1E4D33]/15 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Bus className="h-5 w-5 text-forest" />
            <h3 className="font-heading text-lg font-semibold text-obsidian">
              Transportation & Departure Planner
            </h3>
          </div>
          <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-semibold text-forest">
            Kickoff 20:00
          </span>
        </div>

        {/* Transit Line status list */}
        <div className="space-y-3">
          {transitLines.map((line) => {
            const isHeavy = line.status === 'heavy_congestion';
            return (
              <div
                key={line.lineId}
                className="rounded-xl bg-canvas p-3 border border-[#1E4D33]/10 flex items-center justify-between"
              >
                <div>
                  <div className="text-xs font-semibold text-obsidian">{line.lineName}</div>
                  <div className="text-[11px] text-obsidian/70 flex items-center gap-2 mt-0.5">
                    <Clock className="h-3 w-3" />
                    <span>Next departures: {line.nextDepartureMins.join(', ')} mins</span>
                  </div>
                </div>
                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    isHeavy ? 'bg-red-100 text-red-700' : 'bg-green-100 text-forest'
                  }`}
                >
                  {line.congestionLevelPct}% Load
                </span>
              </div>
            );
          })}
        </div>

        {/* AI Recommendation */}
        {recommendation && (
          <div className="mt-4 rounded-2xl bg-forest/5 p-4 border border-forest/20" role="status" aria-live="polite">
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
        onClick={handleGenerateDeparture}
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs font-semibold text-surface shadow-sm hover:bg-forest/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-pulse" />
        ) : (
          <Bus className="h-4 w-4 text-pulse" />
        )}
        <span>Optimize Multi-Modal Departure Timing</span>
      </button>
    </div>
  );
}
