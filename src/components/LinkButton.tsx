'use client';

import Image from 'next/image';
import type { FC } from 'react';
import type { LinkItem } from '../data/links';

const accentClasses: Record<LinkItem['accent'], string> = {
  blue: 'from-blue-500 to-sky-500 shadow-blue-500/20 text-white',
  cyan: 'from-cyan-500 to-teal-400 shadow-cyan-500/20 text-white',
  violet: 'from-violet-500 to-fuchsia-500 shadow-violet-500/20 text-white',
  emerald: 'from-emerald-500 to-teal-500 shadow-emerald-500/20 text-white',
  rose: 'from-rose-500 to-pink-500 shadow-rose-500/20 text-white',
  amber: 'from-amber-500 to-orange-500 shadow-amber-500/20 text-white',
  indigo: 'from-indigo-600 to-violet-600 shadow-indigo-500/20 text-white',
};

const LinkButton: FC<{ link: LinkItem; compact?: boolean }> = ({ link, compact = false }) => {
  const Icon = link.icon;
  const isMail = link.href.startsWith('mailto:');

  return (
    <a
      href={link.href}
      target={isMail ? '_self' : '_blank'}
      rel={isMail ? undefined : 'noopener noreferrer'}
      className={`group flex items-center justify-between rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-slate-100/90 shadow-lg shadow-slate-950/5 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-200/80 hover:shadow-slate-950/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-slate-900/80 dark:hover:bg-slate-900/95 ${
        compact ? 'px-4 py-3' : 'px-5 py-4'
      }`}
    >
      <div className="flex items-center gap-3.5 sm:gap-4 min-w-0">
        {link.imageSrc ? (
          <div
            className={`relative shrink-0 flex items-center justify-center rounded-2xl overflow-hidden bg-white p-1 border border-slate-200/80 shadow-md dark:border-white/10 dark:bg-slate-900 ${
              compact ? 'h-10 w-10' : 'h-12 w-12'
            }`}
          >
            <Image
              src={link.imageSrc}
              alt={link.label}
              width={48}
              height={48}
              unoptimized
              className="h-full w-full object-contain rounded-xl"
            />
          </div>
        ) : (
          <span
            className={`inline-flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md ${
              accentClasses[link.accent]
            } ${compact ? 'h-10 w-10 text-lg p-2.5' : 'h-12 w-12 text-xl p-3'}`}
          >
            <Icon className="h-full w-full object-contain" />
          </span>
        )}

        <div className="min-w-0 text-left">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-base sm:text-lg font-semibold text-slate-950 dark:text-white truncate">
              {link.label}
            </p>
            {link.badge && (
              <span className="inline-block rounded-full bg-slate-200/90 dark:bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                {link.badge}
              </span>
            )}
          </div>
          <p className="mt-0.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
            {link.description}
          </p>
        </div>
      </div>
      <span className="ml-3 inline-flex shrink-0 h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-950 transition duration-200 group-hover:bg-slate-300 group-hover:translate-x-0.5 dark:bg-white/10 dark:text-slate-200 dark:group-hover:bg-white/15">
        →
      </span>
    </a>
  );
};

export default LinkButton;
