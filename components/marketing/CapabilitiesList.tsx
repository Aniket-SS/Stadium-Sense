import React from 'react';
import { ArrowRight } from 'lucide-react';

const CAPABILITIES = [
  {
    num: '01',
    title: 'AI Wayfinding & Navigation',
    desc: 'Natural language queries to step-by-step routes highlighted on an interactive SVG map.',
  },
  {
    num: '02',
    title: 'Crowd Management Intelligence',
    desc: 'Zone-occupancy classification and plain-language staff mitigation recommendations.',
  },
  {
    num: '03',
    title: 'Accessibility Assistant (WCAG 2.1 AA)',
    desc: 'Dedicated step-free routing, sensory-friendly suite info, and assistance-request drafting.',
  },
  {
    num: '04',
    title: 'Transportation Planner',
    desc: 'Multi-modal departure optimization blending kickoff schedules and rail congestion data.',
  },
  {
    num: '05',
    title: 'Sustainability & ESG Panel',
    desc: 'Live telemetry of water, energy, and waste metrics with AI daily conservation digests.',
  },
  {
    num: '06',
    title: 'Multilingual World Cup Concierge',
    desc: 'Auto-detects input language and responds fluently in English, Spanish, Arabic, Hindi, French, and more.',
  },
  {
    num: '07',
    title: 'Operational Intelligence Digest',
    desc: 'Synthesizes recent venue incident logs into executive situation reports for match coordinators.',
  },
  {
    num: '08',
    title: 'Real-Time Command Decision Support',
    desc: 'Free-text reasoning box answering staff operational questions grounded in live telemetry.',
  },
];

export function CapabilitiesList() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-8">
        <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-[-0.05em] text-obsidian">
          Full-Stack <span className="font-serif italic text-forest">Capabilities</span>
        </h2>
        <p className="mt-1 text-sm text-obsidian/70">
          Eight integrated GenAI modules optimized for hackathon evaluation.
        </p>
      </div>

      <div className="divide-y divide-[#1E4D33]/15 border-t border-b border-[#1E4D33]/15">
        {CAPABILITIES.map((cap) => (
          <div
            key={cap.num}
            className="group flex items-center justify-between py-5 px-3 transition-all duration-300 hover:translate-x-2 hover:bg-forest/5 rounded-xl cursor-pointer"
          >
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="font-mono text-xs font-bold text-forest">{cap.num}</span>
              <div>
                <h3 className="font-heading text-base sm:text-lg font-medium text-obsidian group-hover:text-forest transition-colors">
                  {cap.title}
                </h3>
                <p className="text-xs text-obsidian/70 mt-0.5">{cap.desc}</p>
              </div>
            </div>
            <ArrowRight className="h-4 w-4 text-obsidian/40 group-hover:text-forest group-hover:translate-x-1 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}
