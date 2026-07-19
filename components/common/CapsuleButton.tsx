import React from 'react';
import Link from 'next/link';

interface CapsuleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export function CapsuleButton({
  href,
  variant = 'primary',
  children,
  icon,
  className = '',
  ...props
}: CapsuleButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pulse focus-visible:ring-offset-2';

  const variantClasses = {
    primary:
      'bg-forest text-surface hover:bg-forest/90 shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary:
      'capsule-glass text-obsidian hover:bg-surface border border-[#1E4D33]/20 hover:border-forest/40 active:scale-[0.98]',
    accent:
      'bg-pulse text-obsidian font-semibold hover:bg-pulse/90 shadow-md hover:shadow-lg active:scale-[0.98]',
  };

  const combinedClass = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        <span>{children}</span>
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      <span>{children}</span>
      {icon}
    </button>
  );
}
