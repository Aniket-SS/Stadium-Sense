'use client';

import React, { useEffect, useState } from 'react';
import { Eye } from 'lucide-react';

export function AccessibilityToggle() {
  const [a11yActive, setA11yActive] = useState(
    () => typeof window !== 'undefined' && localStorage.getItem('stadiumsense_a11y_mode') === 'true'
  );

  useEffect(() => {
    if (a11yActive) {
      document.body.classList.add('a11y-mode');
    } else {
      document.body.classList.remove('a11y-mode');
    }
  }, [a11yActive]);

  const handleToggle = () => {
    const nextState = !a11yActive;
    setA11yActive(nextState);
    localStorage.setItem('stadiumsense_a11y_mode', String(nextState));
    if (nextState) {
      document.body.classList.add('a11y-mode');
    } else {
      document.body.classList.remove('a11y-mode');
    }
  };

  return (
    <button
      onClick={handleToggle}
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse ${
        a11yActive
          ? 'bg-pulse text-obsidian shadow-sm'
          : 'capsule-glass text-obsidian/80 hover:text-obsidian'
      }`}
      aria-pressed={a11yActive}
      aria-label="Toggle Persistent Accessibility Mode (Larger text and step-free routing priority)"
      title="Accessibility Mode (WCAG 2.1 AA)"
    >
      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
      <span>A11y Mode</span>
    </button>
  );
}
