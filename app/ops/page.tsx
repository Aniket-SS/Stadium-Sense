import React from 'react';
import { CapsuleNav } from '@/components/navigation/CapsuleNav';
import { CrowdRiskCard } from '@/components/ops/CrowdRiskCard';
import { TransportPlannerCard } from '@/components/ops/TransportPlannerCard';
import { SustainabilityCard } from '@/components/ops/SustainabilityCard';
import { OpsDigestCard } from '@/components/ops/OpsDigestCard';
import { AskOpsAiModal } from '@/components/ops/AskOpsAiModal';
import { getOpsFeed } from '@/lib/data/loaders';
import { ShieldCheck, Activity } from 'lucide-react';

export default function OpsCommandPage() {
  const opsFeed = getOpsFeed();

  return (
    <div className="min-h-screen pb-20">
      <CapsuleNav />

      <main className="mx-auto max-w-5xl px-4 pt-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#1E4D33]/15 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-forest/10 px-3 py-1 text-xs font-semibold text-forest mb-2">
              <Activity className="h-3.5 w-3.5 text-pulse" />
              <span>Real-Time Command Telemetry</span>
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-light tracking-[-0.05em] text-obsidian">
              Tournament Operations <span className="font-serif italic text-forest">Command</span>
            </h1>
            <p className="text-xs text-obsidian/70 mt-1">
              {opsFeed.matchInfo.eventTitle} · Expected Attendance: {opsFeed.matchInfo.expectedAttendance.toLocaleString()}
            </p>
          </div>

          {/* Demo Mode Role Switcher Banner */}
          <div className="rounded-2xl capsule-glass px-4 py-2.5 border border-forest/20 text-xs flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-pulse" />
            <div>
              <span className="font-semibold text-obsidian">Evaluator Demo Mode:</span>
              <span className="text-obsidian/70 ml-1">Staff Role Unlocked</span>
            </div>
          </div>
        </div>

        {/* Real-time Decision Support ('Ask Ops AI') */}
        <AskOpsAiModal />

        {/* Operational Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <CrowdRiskCard zones={opsFeed.crowdZones} />
          <TransportPlannerCard
            transitLines={opsFeed.transitLines}
            kickoffTime={opsFeed.matchInfo.kickoffTime}
          />
          <SustainabilityCard metrics={opsFeed.sustainability} />
          <OpsDigestCard incidents={opsFeed.recentIncidents} />
        </div>
      </main>
    </div>
  );
}
