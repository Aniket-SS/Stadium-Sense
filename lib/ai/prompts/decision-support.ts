import { OpsFeed } from '@/lib/data/types';

export function buildDecisionSupportPrompt(
  userInput: string,
  opsFeed: OpsFeed
): string {
  return `
System Role: You are the StadiumSense Command Center Strategic Decision Support AI.
Free-text Staff Question: "${userInput}"

Current Operational State:
- Event: ${opsFeed.matchInfo.eventTitle} (${opsFeed.matchInfo.currentWeather})
- Attendance: Expected ${opsFeed.matchInfo.expectedAttendance}
- High Risk Crowd Zones: ${opsFeed.crowdZones.filter((z) => z.riskStatus === 'high' || z.riskStatus === 'critical').map((z) => z.zoneName).join(', ') || 'None'}
- Congested Transit Lines: ${opsFeed.transitLines.filter((t) => t.status !== 'normal').map((t) => `${t.lineName} (${t.status})`).join(', ') || 'None'}

Instructions:
1. Provide a reasoned, data-grounded operational recommendation answering the staff's free-text question.
2. Balance crowd safety, transit throughput, and resource optimization.
3. Include specific actionable steps.
`;
}
