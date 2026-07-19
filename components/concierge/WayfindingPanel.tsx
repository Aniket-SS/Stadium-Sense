'use client';

import React, { useEffect, useState } from 'react';
import { Navigation, Accessibility, Footprints, ArrowRight } from 'lucide-react';
import { VenueGraph } from '@/lib/data/types';
import { StadiumMapSvg } from './StadiumMapSvg';

export function WayfindingPanel() {
  const [graph, setGraph] = useState<VenueGraph | null>(null);
  const [sourceId, setSourceId] = useState<string>('gate-a');
  const [targetId, setTargetId] = useState<string>('section-101');
  const [stepFreeOnly, setStepFreeOnly] = useState<boolean>(false);
  const [activeRouteIds, setActiveRouteIds] = useState<string[]>([]);
  const [instructions, setInstructions] = useState<string[]>([]);
  const [distance, setDistance] = useState<number | null>(null);

  useEffect(() => {
    fetch('/api/venue-graph')
      .then((r) => r.json())
      .then((data: VenueGraph) => {
        setGraph(data);
      })
      .catch((e) => console.error('Failed to load venue graph', e));
  }, []);

  const handleCalculateRoute = async () => {
    if (!graph) return;
    try {
      const res = await fetch('/api/reason', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          intent: 'wayfinding',
          promptInput: `Route from ${sourceId} to ${targetId}`,
          context: {
            sourceNodeId: sourceId,
            targetNodeId: targetId,
            accessibilityMode: stepFreeOnly,
          },
        }),
      });

      const data = await res.json();
      if (data.routeData) {
        setActiveRouteIds(data.routeData.nodes);
        setDistance(data.routeData.distanceMeters);
        setInstructions(data.structuredActionItems || []);
      }
    } catch (e) {
      console.error('Wayfinding computation error', e);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
      {/* Route Control Form */}
      <div className="rounded-3xl bg-surface p-6 shadow-md border border-[#1E4D33]/15 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 text-forest mb-4">
            <Navigation className="h-5 w-5 text-pulse" />
            <h2 className="font-heading text-lg font-semibold text-obsidian">
              Interactive Stadium Wayfinding
            </h2>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="source-select" className="block text-xs font-semibold text-obsidian mb-1">
                Start Location (Origin)
              </label>
              <select
                id="source-select"
                value={sourceId}
                onChange={(e) => setSourceId(e.target.value)}
                className="w-full rounded-xl bg-canvas px-3 py-2 text-xs font-medium text-obsidian border border-[#1E4D33]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
              >
                {graph?.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="target-select" className="block text-xs font-semibold text-obsidian mb-1">
                Destination (Target Zone / Gate / Amenity)
              </label>
              <select
                id="target-select"
                value={targetId}
                onChange={(e) => setTargetId(e.target.value)}
                className="w-full rounded-xl bg-canvas px-3 py-2 text-xs font-medium text-obsidian border border-[#1E4D33]/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
              >
                {graph?.nodes.map((n) => (
                  <option key={n.id} value={n.id}>
                    {n.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Accessibility Toggle Checkbox */}
            <label className="flex items-center gap-2.5 rounded-xl capsule-glass p-3 cursor-pointer">
              <input
                type="checkbox"
                checked={stepFreeOnly}
                onChange={(e) => setStepFreeOnly(e.target.checked)}
                className="h-4 w-4 rounded border-forest text-pulse focus:ring-pulse"
              />
              <Accessibility className="h-4 w-4 text-forest" />
              <span className="text-xs font-medium text-obsidian">
                Require Step-Free Accessible Route (Elevators & Ramps Only)
              </span>
            </label>
          </div>
        </div>

        <button
          onClick={handleCalculateRoute}
          className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-surface shadow-md hover:bg-forest/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
        >
          <span>Calculate AI Route</span>
          <ArrowRight className="h-4 w-4 text-pulse" />
        </button>

        {/* Directions summary */}
        {instructions.length > 0 && (
          <div className="mt-6 border-t border-[#1E4D33]/15 pt-4">
            <div className="flex items-center justify-between text-xs font-semibold text-obsidian mb-2">
              <span>Step-by-Step Directions</span>
              {distance && (
                <span className="inline-flex items-center gap-1 text-forest">
                  <Footprints className="h-3.5 w-3.5" />
                  {distance} meters
                </span>
              )}
            </div>
            <ol className="space-y-1.5 text-xs text-obsidian/80 list-decimal pl-4">
              {instructions.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* SVG Interactive Stadium Map */}
      <div className="flex flex-col justify-center">
        {graph && (
          <StadiumMapSvg
            nodes={graph.nodes}
            activePathNodeIds={activeRouteIds}
            onSelectNode={(id) => setTargetId(id)}
          />
        )}
      </div>
    </div>
  );
}
