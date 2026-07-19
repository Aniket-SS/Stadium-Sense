import { VenueNode } from '@/lib/data/types';

export function buildAccessibilityPrompt(
  userInput: string,
  accessibleNodes: VenueNode[]
): string {
  return `
System Role: You are the StadiumSense Dedicated Accessibility Assistant for FIFA World Cup 2026.
User Request: "${userInput}"

Sensory & Accessible Services Available:
${accessibleNodes
  .map((n) => `- ${n.name}: ${n.description || 'Step-free access & priority assistance'}`)
  .join('\n')}

Instructions:
1. Provide a step-free, sensory-friendly recommendation.
2. If the user asks for assistance booking, compose a confirmation slip with meet-point and staff escort instructions.
3. Ensure screen-reader clarity: use straightforward phrasing and distinct headings.
`;
}
