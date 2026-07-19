import { describe, it, expect } from 'vitest';
import { reason } from '@/lib/ai/orchestrator';
import { ReasoningRequestSchema } from '@/lib/ai/types';

describe('Integration: AI Orchestrator & Zod Validation', () => {
  it('validates correct reasoning request payload via Zod', () => {
    const valid = {
      intent: 'wayfinding',
      promptInput: 'How do I get to Gate C?',
      context: { accessibilityMode: true },
    };
    const parsed = ReasoningRequestSchema.safeParse(valid);
    expect(parsed.success).toBe(true);
  });

  it('rejects invalid intent via Zod schema', () => {
    const invalid = {
      intent: 'unsupported_intent',
      promptInput: 'Test query',
    };
    const parsed = ReasoningRequestSchema.safeParse(invalid);
    expect(parsed.success).toBe(false);
  });

  it('returns structured Recommendation from reason() orchestrator', async () => {
    const rec = await reason('crowd', 'Assess Gate B risk');
    expect(rec.intent).toBe('crowd');
    expect(rec.headline).toBeDefined();
    expect(rec.structuredActionItems.length).toBeGreaterThan(0);
    expect(rec.confidenceScore).toBeGreaterThanOrEqual(0.8);
  });
});
