'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShieldAlert } from 'lucide-react';
import { AccessibilityToggle } from '../common/AccessibilityToggle';

export function CapsuleNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { label: 'Overview', href: '/' },
    { label: 'Fan Concierge', href: '/concierge' },
    { label: 'Ops Command', href: '/ops' },
  ];

  return (
    <header className="sticky top-4 z-50 mx-auto max-w-5xl px-4">
      <nav
        className="flex items-center justify-between rounded-full capsule-glass px-6 py-3 shadow-md transition-all duration-300"
        aria-label="Main Navigation"
      >
        {/* Brand Wordmark */}
        <Link
          href="/"
          className="flex items-center gap-2 text-base font-semibold tracking-tight text-forest focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse rounded-full px-2 py-1"
        >
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-pulse animate-pulse" />
          <span className="font-heading">StadiumSense</span>
          <span className="hidden sm:inline-block rounded-full bg-forest/10 px-2 py-0.5 text-[10px] font-medium text-forest">
            FIFA 2026
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse ${
                  isActive
                    ? 'bg-forest text-surface shadow-sm'
                    : 'text-obsidian/80 hover:text-obsidian hover:bg-forest/5'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side controls */}
        <div className="hidden sm:flex items-center gap-3">
          <span className="inline-flex items-center gap-1 rounded-full bg-forest/5 px-2.5 py-1 text-[11px] font-medium text-obsidian/80 border border-forest/10">
            <ShieldAlert className="h-3 w-3 text-pulse" aria-hidden="true" />
            Live GenAI Core
          </span>
          <AccessibilityToggle />
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-obsidian hover:bg-forest/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse"
          aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="mt-2 flex flex-col gap-2 rounded-3xl capsule-glass p-4 shadow-lg md:hidden border border-[#1E4D33]/15">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-2 text-sm font-medium text-obsidian hover:bg-forest/10"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex items-center justify-between border-t border-forest/10 pt-3">
            <AccessibilityToggle />
          </div>
        </div>
      )}
    </header>
  );
}
