/**
 * Security sanitization utility for prompt inputs.
 * Neutralizes prompt injection patterns before input reaches LLM templates.
 */

const PROMPT_INJECTION_PATTERNS = [
  /ignore\s+(all\s+)?previous\s+instructions/gi,
  /system\s+override/gi,
  /you\s+are\s+now/gi,
  /dan\s+mode/gi,
  /<\/?script>/gi,
];

export function sanitizePromptInput(rawInput: string): string {
  let cleaned = rawInput.trim();

  // Strip known injection attempts
  for (const pattern of PROMPT_INJECTION_PATTERNS) {
    cleaned = cleaned.replace(pattern, '[REDACTED]');
  }

  // Remove control characters while preserving unicode letters/punctuation for multilingual input
  cleaned = cleaned.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, '');

  return cleaned;
}
