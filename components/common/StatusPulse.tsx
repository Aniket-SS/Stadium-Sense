import React from 'react';

interface StatusPulseProps {
  label: string;
  sublabel?: string;
  active?: boolean;
}

export function StatusPulse({ label, sublabel, active = true }: StatusPulseProps) {
  return (
    <div
      className="inline-flex items-center gap-2.5 rounded-full bg-surface/80 px-3.5 py-1.5 text-xs font-medium text-obsidian shadow-sm border border-[#1E4D33]/15 backdrop-blur-md"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        {active && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pulse opacity-75" />
        )}
        <span
          className={`relative inline-flex h-2.5 w-2.5 rounded-full ${
            active ? 'bg-pulse' : 'bg-gray-400'
          }`}
        />
      </span>
      <span className="font-semibold">{label}</span>
      {sublabel && <span className="text-obsidian/70">{sublabel}</span>}
    </div>
  );
}
