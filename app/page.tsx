import React from 'react';
import { CapsuleNav } from '@/components/navigation/CapsuleNav';
import { HeroSection } from '@/components/marketing/HeroSection';
import { FeatureShowcase } from '@/components/marketing/FeatureShowcase';
import { MethodSection } from '@/components/marketing/MethodSection';
import { CapabilitiesList } from '@/components/marketing/CapabilitiesList';
import { ProofSection } from '@/components/marketing/ProofSection';
import { Info } from 'lucide-react';

export default function MarketingHomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <CapsuleNav />
        <main>
          <HeroSection />
          <FeatureShowcase />
          <MethodSection />
          <CapabilitiesList />
          <ProofSection />
        </main>
      </div>

      {/* Footer with explicit mock-data disclosure */}
      <footer className="mt-20 border-t border-[#1E4D33]/15 bg-surface/50 py-10">
        <div className="mx-auto max-w-5xl px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-obsidian/70">
          <div className="flex items-center gap-2">
            <Info className="h-4 w-4 text-forest" />
            <span>
              <strong>Simulated Telemetry Disclosure:</strong> All sensor feeds, crowd densities,
              and transit schedules are seeded mock datasets serving real-time GenAI reasoning.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span>StadiumSense — PromptWars Challenge 4</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-forest hover:underline"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repo (&lt; 10 MB)</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
