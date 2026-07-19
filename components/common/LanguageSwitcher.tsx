'use client';

import React from 'react';
import { Globe } from 'lucide-react';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'fr', label: 'Français' },
  { code: 'pt', label: 'Português' },
  { code: 'de', label: 'Deutsch' },
  { code: 'ja', label: '日本語' },
] as const;

interface LanguageSwitcherProps {
  currentLocale: string;
  onLocaleChange: (locale: string) => void;
}

export function LanguageSwitcher({ currentLocale, onLocaleChange }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1.5 rounded-full capsule-glass px-3 py-1.5 text-xs text-obsidian shadow-sm">
      <Globe className="h-3.5 w-3.5 text-forest" aria-hidden="true" />
      <label htmlFor="language-select" className="sr-only">
        Select Language
      </label>
      <select
        id="language-select"
        value={currentLocale}
        onChange={(e) => onLocaleChange(e.target.value)}
        className="bg-transparent font-medium text-obsidian focus:outline-none focus-visible:ring-1 focus-visible:ring-pulse rounded cursor-pointer"
        aria-label="Language Selector"
      >
        {SUPPORTED_LANGUAGES.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-canvas text-obsidian">
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
