import { z } from 'zod';

export type ReasoningIntent =
  | 'wayfinding'
  | 'crowd'
  | 'accessibility'
  | 'transport'
  | 'sustainability'
  | 'concierge'
  | 'ops_digest'
  | 'decision_support';

export interface ReasoningContext {
  locale?: string;
  accessibilityMode?: boolean;
  sourceNodeId?: string;
  targetNodeId?: string;
  userLocation?: string;
  role?: 'fan' | 'staff';
  customMetadata?: Record<string, unknown>;
}

export interface Recommendation {
  intent: ReasoningIntent;
  headline: string;
  plainLanguageSummary: string;
  structuredActionItems: string[];
  confidenceScore: number;
  routeData?: {
    nodes: string[];
    distanceMeters: number;
    stepFree: boolean;
  };
  liveMetricsRef?: {
    source: string;
    value: string;
  };
  generatedAt: string;
}

export const ReasoningRequestSchema = z.object({
  intent: z.enum([
    'wayfinding',
    'crowd',
    'accessibility',
    'transport',
    'sustainability',
    'concierge',
    'ops_digest',
    'decision_support',
  ]),
  promptInput: z
    .string()
    .min(1, 'Prompt input is required')
    .max(1000, 'Input exceeds maximum length of 1000 characters')
    .transform((val) => val.trim()),
  context: z
    .object({
      locale: z.string().optional(),
      accessibilityMode: z.boolean().optional(),
      sourceNodeId: z.string().optional(),
      targetNodeId: z.string().optional(),
      userLocation: z.string().optional(),
      role: z.enum(['fan', 'staff']).optional(),
    })
    .optional(),
});

export type ReasoningRequestPayload = z.infer<typeof ReasoningRequestSchema>;
