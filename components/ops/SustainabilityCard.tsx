'use client';

import React, { useState } from 'react';
import { Leaf, Sparkles, Loader2, Droplet, Zap, Recycle } from 'lucide-react';
import { SustainabilityMetrics } from '@/lib/data/types';
import { Recommendation } from '@/lib/ai/types';

interface SustainabilityCardProps {
  metrics: SustainabilityMetrics;
}

export function SustainabilityCard({ metrics }: SustainabilityCardProps) {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateInsight = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'sustainability',
          promptInput: 'Summarize daily ESG telemetry and highlight energy/water savings.',
        }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error('Sustainability reasoning error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-md border border-[#1E4D33]/15 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-forest" />
            <h3 className="font-heading text-lg font-semibold text-obsidian">
              Sustainability & ESG Telemetry
            </h3>
          </div>
          <span className="rounded-full bg-forest/10 px-2.5 py-0.5 text-xs font-semibold text-forest">
            Live Sensors
          </span>
        </div>

        {/* ESG Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-xl bg-canvas p-3 border border-[#1E4D33]/10">
            <div className="flex items-center gap-1.5 text-xs text-obsidian/60 mb-1">
              <Droplet className="h-3.5 w-3.5 text-blue-600" />
              <span>Water</span>
            </div>
            <div className="text-sm font-semibold text-obsidian">
              {Math.round(metrics.waterUsageLiters / 1000)}k L
            </div>
            <div className="text-[10px] text-forest">Within target</div>
          </div>

          <div className="rounded-xl bg-canvas p-3 border border-[#1E4D33]/10">
            <div className="flex items-center gap-1.5 text-xs text-obsidian/60 mb-1">
              <Zap className="h-3.5 w-3.5 text-amber-500" />
              <span>Solar Offset</span>
            </div>
            <div className="text-sm font-semibold text-obsidian">{metrics.solarOffsetPct}%</div>
            <div className="text-[10px] text-forest">Canopy active</div>
          </div>

          <div className="rounded-xl bg-canvas p-3 border border-[#1E4D33]/10">
            <div className="flex items-center gap-1.5 text-xs text-obsidian/60 mb-1">
              <Recycle className="h-3.5 w-3.5 text-forest" />
              <span>Diverted</span>
            </div>
            <div className="text-sm font-semibold text-obsidian">{metrics.wasteDivertedPct}%</div>
            <div className="text-[10px] text-forest">{metrics.compostKg} kg comp.</div>
          </div>
        </div>

        {/* AI Insight */}
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
        onClick={handleGenerateInsight}
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs font-semibold text-surface shadow-sm hover:bg-forest/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-pulse" />
        ) : (
          <Leaf className="h-4 w-4 text-pulse" />
        )}
        <span>Generate AI Daily ESG Insight</span>
      </button>
    </div>
  );
}
