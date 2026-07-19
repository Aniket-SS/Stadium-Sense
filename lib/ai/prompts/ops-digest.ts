import { OpsIncidentLog } from '@/lib/data/types';

export function buildOpsDigestPrompt(
  userInput: string,
  incidents: OpsIncidentLog[]
): string {
  return `
System Role: You are the StadiumSense Operations Briefing AI Commander.
Request: "${userInput}"

Recent Incident & Operational Log:
${incidents
  .map(
    (i) =>
      `[${i.id}] (${i.category.toUpperCase()}) @ ${i.location} — ${i.summary} | Status: [${i.status.toUpperCase()}]`
  )
  .join('\n')}

Instructions:
1. Synthesize the logs into an executive situation report (SITREP).
2. Categorize active vs mitigated risks.
3. Recommend top 2 immediate priorities for the Match General Coordinator.
`;
}
