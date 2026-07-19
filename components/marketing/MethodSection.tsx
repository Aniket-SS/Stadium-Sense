import React from 'react';
import { Database, Cpu, SendHorizontal } from 'lucide-react';

export function MethodSection() {
  const steps = [
    {
      step: '01 / SENSE',
      title: 'Telemetry Ingestion',
      desc: 'Aggregates venue graph nodes, crowd zone occupancy sensors, multi-modal transit congestion, and ESG sustainability metrics into structured JSON feeds.',
      icon: <Database className="h-6 w-6 text-forest" />,
    },
    {
      step: '02 / REASON',
      title: 'Unified AI Orchestration',
      desc: 'All 8 feature modules invoke a single server-side typed endpoint reason(intent, context) validated via Zod schemas and rate limited against abuse.',
      icon: <Cpu className="h-6 w-6 text-pulse" />,
    },
    {
      step: '03 / ACT',
      title: 'Actionable Operations',
      desc: 'Returns step-free highlighted SVG routes, multilingual conversational support, staff SITREPs, and operational decision support in under 500ms.',
      icon: <SendHorizontal className="h-6 w-6 text-forest" />,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-light tracking-[-0.05em] text-obsidian">
          How StadiumSense <span className="font-serif italic text-forest">thinks</span>
        </h2>
        <p className="mt-2 text-sm text-obsidian/70">
          A load-bearing AI architecture built for high-concurrency World Cup venues.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {steps.map((item) => (
          <div
            key={item.step}
            className="flex flex-col justify-between rounded-2xl capsule-glass p-6 shadow-sm border border-[#1E4D33]/15"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono font-semibold text-forest">{item.step}</span>
                {item.icon}
              </div>
              <h3 className="font-heading text-xl font-medium text-obsidian">{item.title}</h3>
              <p className="mt-2 text-xs text-obsidian/80 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
