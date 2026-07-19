import { NextRequest, NextResponse } from 'next/server';
import { ReasoningRequestSchema } from '@/lib/ai/types';
import { reason } from '@/lib/ai/orchestrator';
import { checkRateLimit } from '@/lib/security/rate-limiter';
import { sanitizePromptInput } from '@/lib/security/validator';

export async function POST(req: NextRequest) {
  try {
    // 1. IP / client identifier rate limiting
    const clientIp = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const rateLimit = checkRateLimit(clientIp, 80, 60_000);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please wait before issuing additional AI requests.' },
        {
          status: 429,
          headers: {
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': String(rateLimit.resetTime),
          },
        }
      );
    }

    // 2. Zod validation of payload
    const body = await req.json().catch(() => null);
    const parseResult = ReasoningRequestSchema.safeParse(body);

    if (!parseResult.success) {
      return NextResponse.json(
        {
          error: 'Invalid request payload',
          details: parseResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    const { intent, promptInput, context } = parseResult.data;

    // 3. Prompt Injection / Input Sanitization
    const sanitizedInput = sanitizePromptInput(promptInput);

    // 4. Execute Unified Reasoning Layer
    const recommendation = await reason(intent, sanitizedInput, context);

    return NextResponse.json(recommendation, {
      status: 200,
      headers: {
        'X-RateLimit-Remaining': String(rateLimit.remaining),
        'Cache-Control': 'no-store',
      },
    });
  } catch (err) {
    console.error('[API /api/reason Error]', err);
    return NextResponse.json(
      { error: 'Internal server error while orchestrating AI reasoning.' },
      { status: 500 }
    );
  }
}
