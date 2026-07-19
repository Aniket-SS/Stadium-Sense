'use client';

import React, { useState } from 'react';
import { ShieldAlert, Sparkles, Loader2, Users } from 'lucide-react';
import { CrowdZoneTelemetry } from '@/lib/data/types';
import { Recommendation } from '@/lib/ai/types';

interface CrowdRiskCardProps {
  zones: CrowdZoneTelemetry[];
}

export function CrowdRiskCard({ zones }: CrowdRiskCardProps) {
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);
  const [loading, setLoading] = useState(false);

  const handleGenerateMitigation = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'crowd',
          promptInput: 'Assess high risk zones and recommend immediate crowd flow mitigation.',
        }),
      });
      const data = await res.json();
      setRecommendation(data);
    } catch (e) {
      console.error('Crowd reasoning error', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-3xl bg-surface p-6 shadow-md border border-[#1E4D33]/15 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-forest" />
            <h3 className="font-heading text-lg font-semibold text-obsidian">
              Crowd Management Intelligence
            </h3>
          </div>
          <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-semibold text-red-700">
            1 High Risk Zone
          </span>
        </div>

        {/* Zone telemetry bars */}
        <div className="space-y-3">
          {zones.map((zone) => {
            const isHigh = zone.riskStatus === 'high' || zone.riskStatus === 'critical';
            return (
              <div key={zone.zoneId} className="rounded-xl bg-canvas p-3 border border-[#1E4D33]/10">
                <div className="flex items-center justify-between text-xs font-medium text-obsidian mb-1.5">
                  <span>{zone.zoneName}</span>
                  <span className={isHigh ? 'text-red-600 font-bold' : 'text-forest'}>
                    {zone.currentOccupancyPct}% ({zone.flowRatePerMin} pax/min)
                  </span>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-[#1E4D33]/10">
                  <div
                    className={`h-full transition-all duration-500 ${
                      isHigh ? 'bg-red-500' : 'bg-forest'
                    }`}
                    style={{ width: `${zone.currentOccupancyPct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* AI Mitigation output */}
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
        onClick={handleGenerateMitigation}
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-4 py-2.5 text-xs font-semibold text-surface shadow-sm hover:bg-forest/90 disabled:opacity-50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin text-pulse" />
        ) : (
          <ShieldAlert className="h-4 w-4 text-pulse" />
        )}
        <span>Generate AI Crowd Mitigation Strategy</span>
      </button>
    </div>
  );
}
