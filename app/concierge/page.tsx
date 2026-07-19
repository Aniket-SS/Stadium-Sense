import React from 'react';
import { CapsuleNav } from '@/components/navigation/CapsuleNav';
import { ConciergeChat } from '@/components/concierge/ConciergeChat';
import { WayfindingPanel } from '@/components/concierge/WayfindingPanel';
import { Accessibility, Sparkles } from 'lucide-react';

export default function ConciergePage() {
  return (
    <div className="min-h-screen pb-20">
      <CapsuleNav />

      <main className="mx-auto max-w-5xl px-4 pt-10">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest mb-3">
            <Sparkles className="h-3.5 w-3.5 text-pulse" />
            <span>AI Fan Operations Layer</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-5xl font-light tracking-[-0.05em] text-obsidian">
            Fan <span className="font-serif italic text-forest">Concierge</span> & Wayfinding
          </h1>
          <p className="mt-2 text-sm text-obsidian/70 max-w-xl mx-auto">
            Get instant multilingual answers, book step-free sensory assistance, or generate custom
            stadium routes for FIFA World Cup 2026.
          </p>
        </div>

        {/* Accessibility Mode Notice */}
        <div className="mb-8 rounded-2xl capsule-glass p-4 border border-[#1E4D33]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-pulse text-obsidian">
              <Accessibility className="h-5 w-5" />
            </div>
            <div>
              <h2 className="font-heading text-sm font-semibold text-obsidian">
                WCAG 2.1 AA & Sensory Accommodations
              </h2>
              <p className="text-xs text-obsidian/70">
                Sensory Haven Quiet Suite is open at West Concourse Level 1. Toggle &ldquo;A11y Mode&rdquo; in
                the top navigation bar for enlarged typography and priority step-free routing.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Wayfinding Panel */}
        <div className="mb-12">
          <WayfindingPanel />
        </div>

        {/* Multilingual AI Concierge Chat */}
        <div>
          <ConciergeChat />
        </div>
      </main>
    </div>
  );
}
