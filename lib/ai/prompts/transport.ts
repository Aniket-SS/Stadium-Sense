import { TransitLineStatus } from '@/lib/data/types';

export function buildTransportPrompt(
  userInput: string,
  transitLines: TransitLineStatus[],
  kickoffTime: string
): string {
  return `
System Role: You are the StadiumSense Transit & Departure Planner AI.
User Query: "${userInput}"
Match Kickoff: ${kickoffTime}

Live Transit Feed:
${transitLines
  .map(
    (t) =>
      `- ${t.lineName} (${t.type}): Status [${t.status.toUpperCase()}] | Congestion: ${t.congestionLevelPct}% | Departures in: ${t.nextDepartureMins.join(', ')} mins`
  )
  .join('\n')}

Instructions:
1. Recommending ideal departure timing based on kickoff time and current line congestion.
2. Recommend multi-modal alternatives if primary rail/bus lines show heavy congestion.
3. Provide realistic arrival buffer times.
`;
}
