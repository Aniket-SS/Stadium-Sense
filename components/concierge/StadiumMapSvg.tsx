'use client';

import React from 'react';
import { VenueNode } from '@/lib/data/types';

interface StadiumMapSvgProps {
  nodes: VenueNode[];
  activePathNodeIds?: string[];
  selectedNodeId?: string;
  onSelectNode?: (nodeId: string) => void;
}

export function StadiumMapSvg({
  nodes,
  activePathNodeIds = [],
  selectedNodeId,
  onSelectNode,
}: StadiumMapSvgProps) {
  const activeSet = new Set(activePathNodeIds);

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl bg-canvas border border-[#1E4D33]/15 p-4 shadow-sm"
      role="group"
      aria-label="NYNJ MetLife Stadium 2026 Interactive Vector Map"
    >
      <svg viewBox="0 0 100 100" className="w-full h-auto aspect-[16/10]">
        {/* Pitch / Field Outline */}
        <rect
          x="32"
          y="28"
          width="36"
          height="44"
          rx="4"
          fill="#1E4D33"
          fillOpacity="0.12"
          stroke="#1E4D33"
          strokeWidth="0.8"
        />
        <circle
          cx="50"
          cy="50"
          r="6"
          fill="none"
          stroke="#1E4D33"
          strokeWidth="0.6"
          strokeDasharray="1.5 1.5"
        />
        <line x1="32" y1="50" x2="68" y2="50" stroke="#1E4D33" strokeWidth="0.6" />

        {/* Outer Stadium Concourse Ring */}
        <ellipse
          cx="50"
          cy="50"
          rx="44"
          ry="44"
          fill="none"
          stroke="#1E4D33"
          strokeWidth="1.2"
          strokeOpacity="0.25"
        />

        {/* Dynamic Highlighted Path Lines */}
        {activePathNodeIds.length > 1 &&
          activePathNodeIds.map((id, idx) => {
            if (idx === 0) return null;
            const prev = nodes.find((n) => n.id === activePathNodeIds[idx - 1]);
            const curr = nodes.find((n) => n.id === id);
            if (!prev || !curr) return null;
            return (
              <line
                key={`path-${idx}`}
                x1={prev.coordinates.x}
                y1={prev.coordinates.y}
                x2={curr.coordinates.x}
                y2={curr.coordinates.y}
                stroke="#42A85D"
                strokeWidth="2.5"
                strokeLinecap="round"
                className="animate-pulse"
              />
            );
          })}

        {/* Nodes */}
        {nodes.map((node) => {
          const isHighlighted = activeSet.has(node.id);
          const isSelected = selectedNodeId === node.id;
          const { x, y } = node.coordinates;

          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-200 hover:scale-125"
              onClick={() => onSelectNode?.(node.id)}
              role="button"
              tabIndex={0}
              aria-label={`${node.name} (${node.category})`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') onSelectNode?.(node.id);
              }}
            >
              {/* Pulsing ring for active route node */}
              {isHighlighted && (
                <circle cx={x} cy={y} r="4.5" fill="#42A85D" fillOpacity="0.3" />
              )}
              <circle
                cx={x}
                cy={y}
                r={isSelected || isHighlighted ? '3' : '2'}
                fill={isHighlighted ? '#42A85D' : isSelected ? '#1E4D33' : '#12281A'}
                stroke="#FFFFFF"
                strokeWidth="0.6"
              />
              <text
                x={x}
                y={y - 3.8}
                fontSize="2.6"
                textAnchor="middle"
                fill="#12281A"
                fontWeight={isHighlighted ? '700' : '500'}
                className="pointer-events-none select-none"
              >
                {node.name.split(' ')[0]}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-[11px] text-obsidian/70">
        <div className="flex items-center gap-4">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-pulse" /> Active AI Route
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-forest" /> Step-Free Node
          </span>
        </div>
        <span>Click or tap any node to inspect stadium amenities</span>
      </div>
    </div>
  );
}
