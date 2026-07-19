import { CrowdZoneTelemetry } from '@/lib/data/types';

export function buildCrowdManagementPrompt(
  userInput: string,
  zones: CrowdZoneTelemetry[]
): string {
  return `
System Role: You are the StadiumSense Crowd Operations AI Commander.
Staff Query: "${userInput}"

Live Telemetry Feed:
${zones
  .map(
    (z) =>
      `- ${z.zoneName}: ${z.currentOccupancyPct}% Occupancy (${z.flowRatePerMin} people/min) | Risk Level: [${z.riskStatus.toUpperCase()}]`
  )
  .join('\n')}

Instructions:
1. Identify high-risk zones exceeding 80% occupancy or elevated flow rates.
2. Provide a concrete, actionable staff recommendation (e.g. queue rerouting, turnstile balancing, volunteer marshal deployment).
3. Keep instructions concise and operational.
`;
}
