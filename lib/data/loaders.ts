import venueGraphData from './venue-graph.json';
import opsFeedData from './ops-feed.json';
import { VenueGraph, OpsFeed, VenueNode, VenueEdge } from './types';

export function getVenueGraph(): VenueGraph {
  return venueGraphData as VenueGraph;
}

export function getOpsFeed(): OpsFeed {
  return opsFeedData as OpsFeed;
}

export interface RoutePathResult {
  nodes: VenueNode[];
  edges: VenueEdge[];
  totalDistanceMeters: number;
  stepFree: boolean;
  stepByStepText: string[];
}

/**
 * Computes shortest path on the stadium venue graph using Dijkstra's algorithm.
 * Automatically filters out non-step-free edges when requireStepFree is set to true.
 */
export function computeShortestPath(
  sourceId: string,
  targetId: string,
  requireStepFree = false
): RoutePathResult | null {
  const graph = getVenueGraph();
  const nodeMap = new Map<string, VenueNode>(graph.nodes.map((n) => [n.id, n]));

  if (!nodeMap.has(sourceId) || !nodeMap.has(targetId)) {
    return null;
  }

  const distances = new Map<string, number>();
  const previousNode = new Map<string, { nodeId: string; edge: VenueEdge } | null>();
  const unvisited = new Set<string>();

  for (const node of graph.nodes) {
    distances.set(node.id, Infinity);
    previousNode.set(node.id, null);
    unvisited.add(node.id);
  }
  distances.set(sourceId, 0);

  while (unvisited.size > 0) {
    let currentId: string | null = null;
    let smallestDist = Infinity;

    for (const nodeId of unvisited) {
      const d = distances.get(nodeId) ?? Infinity;
      if (d < smallestDist) {
        smallestDist = d;
        currentId = nodeId;
      }
    }

    if (!currentId || smallestDist === Infinity) break;
    if (currentId === targetId) break;

    unvisited.delete(currentId);

    // Find outgoing/bidirectional edges
    const relevantEdges = graph.edges.filter(
      (e) =>
        (!requireStepFree || e.stepFree) &&
        (e.source === currentId || e.target === currentId)
    );

    for (const edge of relevantEdges) {
      const neighborId = edge.source === currentId ? edge.target : edge.source;
      if (!unvisited.has(neighborId)) continue;

      const alt = (distances.get(currentId) ?? Infinity) + edge.distanceMeters;
      if (alt < (distances.get(neighborId) ?? Infinity)) {
        distances.set(neighborId, alt);
        previousNode.set(neighborId, { nodeId: currentId, edge });
      }
    }
  }

  if ((distances.get(targetId) ?? Infinity) === Infinity) {
    return null;
  }

  // Reconstruct path
  const pathNodes: VenueNode[] = [];
  const pathEdges: VenueEdge[] = [];
  let curr = targetId;

  while (curr !== sourceId) {
    const prev = previousNode.get(curr);
    if (!prev) break;
    const nodeObj = nodeMap.get(curr);
    if (nodeObj) pathNodes.unshift(nodeObj);
    pathEdges.unshift(prev.edge);
    curr = prev.nodeId;
  }

  const startNode = nodeMap.get(sourceId);
  if (startNode) pathNodes.unshift(startNode);

  const stepByStepText = pathEdges.map((e, idx) => `${idx + 1}. ${e.instructions}`);

  return {
    nodes: pathNodes,
    edges: pathEdges,
    totalDistanceMeters: distances.get(targetId) ?? 0,
    stepFree: requireStepFree,
    stepByStepText,
  };
}
