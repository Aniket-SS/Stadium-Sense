import React from 'react';
import { Terminal, CheckCircle2 } from 'lucide-react';

export function ProofSection() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="rounded-3xl bg-obsidian p-8 text-surface shadow-xl">
        <div className="flex items-center justify-between border-b border-surface/10 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <Terminal className="h-4 w-4 text-pulse" />
            <span className="font-mono text-xs text-pulse">
              LIVE REASONING TRANSCRIPT — INTENT: CROWD_MANAGEMENT
            </span>
          </div>
          <span className="rounded-full bg-pulse/20 px-2.5 py-0.5 text-[10px] font-mono text-pulse">
            CONFIDENCE: 96%
          </span>
        </div>

        <blockquote className="space-y-4 font-mono text-xs sm:text-sm text-surface/90">
          <div>
            <span className="text-pulse font-semibold">HEADLINE:</span> Priority Crowd Mitigation —
            Gate B East Transit Plaza
          </div>
          <div className="text-surface/80">
            <span className="text-pulse font-semibold">SUMMARY:</span> Gate B is experiencing
            elevated density (88% occupancy, 420 pax/min). Recommend immediately diverting 35% of
            arriving rail passengers to Gate A North Plaza Express portals.
          </div>
          <div className="space-y-1 pt-2">
            <span className="text-pulse font-semibold">RECOMMENDED ACTION ITEMS:</span>
            <div className="flex items-start gap-2 text-surface/90">
              <CheckCircle2 className="h-4 w-4 text-pulse shrink-0 mt-0.5" />
              <span>Activate variable message signage directing fans to Gate A.</span>
            </div>
            <div className="flex items-start gap-2 text-surface/90">
              <CheckCircle2 className="h-4 w-4 text-pulse shrink-0 mt-0.5" />
              <span>Deploy 6 Volunteer Stewards at Meadowlands transit exit.</span>
            </div>
            <div className="flex items-start gap-2 text-surface/90">
              <CheckCircle2 className="h-4 w-4 text-pulse shrink-0 mt-0.5" />
              <span>Open 2 reserve express turnstiles at North Plaza.</span>
            </div>
          </div>
        </blockquote>
      </div>
    </section>
  );
}
