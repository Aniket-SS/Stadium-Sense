import React from 'react';
import { Navigation, ShieldAlert, Bus, Leaf } from 'lucide-react';

const FEATURES = [
  {
    id: 'wayfinding',
    title: 'AI Wayfinding & Step-Free Routing',
    subtitle: 'Reasoned over stadium graph JSON with WCAG accessibility priority.',
    icon: <Navigation className="h-5 w-5 text-pulse" />,
    svgPreview: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="5" y="5" width="90" height="50" rx="4" fill="#1E4D33" fillOpacity="0.08" />
        <circle cx="20" cy="30" r="5" fill="#1E4D33" />
        <circle cx="80" cy="30" r="5" fill="#42A85D" />
        <path
          d="M20 30 Q50 10 80 30"
          fill="none"
          stroke="#42A85D"
          strokeWidth="2.5"
          strokeDasharray="4 2"
        />
      </svg>
    ),
  },
  {
    id: 'crowd',
    title: 'Crowd Risk & Flow Intelligence',
    subtitle: 'Ingests live zone sensors and synthesizes plain-language mitigation.',
    icon: <ShieldAlert className="h-5 w-5 text-pulse" />,
    svgPreview: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <rect x="10" y="15" width="22" height="30" rx="3" fill="#42A85D" fillOpacity="0.8" />
        <rect x="38" y="15" width="22" height="30" rx="3" fill="#EAB308" fillOpacity="0.8" />
        <rect x="66" y="15" width="22" height="30" rx="3" fill="#EF4444" fillOpacity="0.8" />
      </svg>
    ),
  },
  {
    id: 'transport',
    title: 'Multi-Modal Departure Planner',
    subtitle: 'Optimizes fan leave time based on kickoff and transit rail congestion.',
    icon: <Bus className="h-5 w-5 text-pulse" />,
    svgPreview: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <line x1="10" y1="30" x2="90" y2="30" stroke="#1E4D33" strokeWidth="4" />
        <circle cx="35" cy="30" r="6" fill="#42A85D" />
        <circle cx="70" cy="30" r="6" fill="#1E4D33" />
      </svg>
    ),
  },
  {
    id: 'sustainability',
    title: 'Sustainability & ESG Insights',
    subtitle: 'Live energy, water, and waste tracking with LLM daily conservation digests.',
    icon: <Leaf className="h-5 w-5 text-pulse" />,
    svgPreview: (
      <svg viewBox="0 0 100 60" className="w-full h-full">
        <path d="M20 45 L40 25 L60 35 L80 15" fill="none" stroke="#42A85D" strokeWidth="3" />
        <circle cx="80" cy="15" r="4" fill="#1E4D33" />
      </svg>
    ),
  },
];

export function FeatureShowcase() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-[-0.05em] text-obsidian">
          Engineered for <span className="font-serif italic text-forest">tournament precision</span>
        </h2>
        <p className="mt-2 text-sm text-obsidian/70">
          Substance Lab aesthetic combined with functional real-time GenAI operations.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <div
            key={feature.id}
            className="group relative overflow-hidden rounded-2xl bg-surface p-6 shadow-md transition-all duration-300 hover:shadow-xl border border-[#1E4D33]/15"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10">
                {feature.icon}
              </div>
              <div>
                <h3 className="font-heading text-lg font-medium text-obsidian">
                  {feature.title}
                </h3>
                <p className="text-xs text-obsidian/70">{feature.subtitle}</p>
              </div>
            </div>

            <div className="mt-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-canvas p-4 border border-[#1E4D33]/10 flex items-center justify-center">
              {feature.svgPreview}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
