import { describe, it, expect } from 'vitest';
import { computeShortestPath, getVenueGraph } from '@/lib/data/loaders';

describe('Unit: Venue Graph Dijkstra Pathfinding', () => {
  it('computes shortest path from Gate A to Section 101', () => {
    const route = computeShortestPath('gate-a', 'section-101', false);
    expect(route).not.toBeNull();
    expect(route?.nodes[0].id).toBe('gate-a');
    expect(route?.nodes[route.nodes.length - 1].id).toBe('section-101');
    expect(route?.totalDistanceMeters).toBeGreaterThan(0);
  });

  it('computes step-free accessible path correctly', () => {
    const route = computeShortestPath('gate-d', 'section-140', true);
    expect(route).not.toBeNull();
    expect(route?.stepFree).toBe(true);
    expect(route?.edges.every((e) => e.stepFree)).toBe(true);
  });

  it('returns null for non-existent node ids', () => {
    const invalid = computeShortestPath('gate-a', 'unknown-node-xyz');
    expect(invalid).toBeNull();
  });
});
