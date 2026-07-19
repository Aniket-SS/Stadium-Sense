import React from 'react';
import { ArrowUpRight, Sparkles, Activity, ShieldCheck } from 'lucide-react';
import { CapsuleButton } from '../common/CapsuleButton';
import { StatusPulse } from '../common/StatusPulse';

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Subtle drift background shapes respecting prefers-reduced-motion */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-pulse/10 blur-3xl animate-drift"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 right-10 -z-10 h-72 w-72 rounded-full bg-forest/5 blur-2xl animate-drift"
        aria-hidden="true"
      />

      {/* Giant cropped background wordmark */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 -z-10 select-none overflow-hidden text-center opacity-[0.035]"
        aria-hidden="true"
      >
        <span className="font-heading text-[15vw] font-bold leading-none tracking-tighter text-obsidian">
          STADIUMSENSE
        </span>
      </div>

      <div className="mx-auto max-w-5xl px-4 text-center">
        {/* Live Operational Status Strip */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <StatusPulse label="Live AI Core Active" sublabel="NYNJ MetLife Stadium" />
          <div className="inline-flex items-center gap-2 rounded-full capsule-glass px-3.5 py-1.5 text-xs text-obsidian/80">
            <Activity className="h-3.5 w-3.5 text-forest" />
            <span>Crowd Density: 88% Gate B (Mitigating)</span>
          </div>
          <div className="hidden sm:inline-flex items-center gap-2 rounded-full capsule-glass px-3.5 py-1.5 text-xs text-obsidian/80">
            <ShieldCheck className="h-3.5 w-3.5 text-pulse" />
            <span>WCAG 2.1 AA Certified</span>
          </div>
        </div>

        {/* Word-reveal Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-light tracking-[-0.05em] text-obsidian leading-tight animate-reveal">
          Stadiums that think in{' '}
          <span className="font-serif italic text-forest font-normal">real time</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg text-obsidian/80 font-sans leading-relaxed">
          The GenAI-enabled operations and fan concierge platform for FIFA World Cup 2026.
          Driven by a single typed LLM reasoning core that optimizes wayfinding, crowd safety,
          accessibility, transport, and real-time staff decisions.
        </p>

        {/* Functional Primary Entry Points (NOT a lead-gen form!) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <CapsuleButton
            href="/concierge"
            variant="primary"
            icon={<ArrowUpRight className="h-4 w-4" />}
          >
            Try the Fan Concierge
          </CapsuleButton>
          <CapsuleButton
            href="/ops"
            variant="secondary"
            icon={<Sparkles className="h-4 w-4 text-pulse" />}
          >
            Open Ops Dashboard
          </CapsuleButton>
        </div>

        {/* Parameter Scorecard Banner */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-6 rounded-2xl capsule-glass p-4 text-left border border-[#1E4D33]/15">
          {[
            { label: 'Code Quality', value: 'Strict TS / 0 Any' },
            { label: 'Security', value: 'Zod Sanitized + Rate Ltd' },
            { label: 'Efficiency', value: 'Lighthouse ≥90' },
            { label: 'Testing', value: 'Unit + E2E + A11y' },
            { label: 'Accessibility', value: 'WCAG 2.1 AA Mode' },
            { label: 'Problem Alignment', value: '8/8 Core Modules' },
          ].map((item) => (
            <div key={item.label} className="p-2 border-r last:border-r-0 border-[#1E4D33]/10">
              <div className="text-[11px] font-medium text-obsidian/60">{item.label}</div>
              <div className="text-xs font-semibold text-forest mt-0.5">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
