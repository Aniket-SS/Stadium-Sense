import { VenueGraph } from '@/lib/data/types';
import { ReasoningContext } from '../types';

export function buildWayfindingPrompt(
  userInput: string,
  graph: VenueGraph,
  context?: ReasoningContext
): string {
  const isAccessible = context?.accessibilityMode === true;
  return `
System Role: You are the StadiumSense Wayfinding AI for ${graph.stadiumName} hosting ${graph.tournamentEvent}.
User Query: "${userInput}"
Accessibility Requirements: ${isAccessible ? 'STRICT STEP-FREE ACCESSIBLE ROUTING REQUIRED (Elevators & Ramps Only, No Stairs).' : 'Standard or Step-Free routes allowed.'}

Available Nodes:
${graph.nodes.map((n) => `- [${n.id}] ${n.name} (Category: ${n.category}, Accessible: ${n.accessible})`).join('\n')}

Instructions:
1. Analyze the user's origin and destination from their query and stadium layout.
2. Provide a clear, polite wayfinding recommendation with numbered steps.
3. Highlight landmarks and accessibility accommodations.
`;
}
