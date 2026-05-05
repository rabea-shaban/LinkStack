import type { FC } from 'react';
import type { LinkItem } from '../data/links';

const accentClasses: Record<LinkItem['accent'], string> = {
  blue: 'from-blue-500 to-sky-500',
  cyan: 'from-cyan-500 to-teal-400',
  violet: 'from-violet-500 to-fuchsia-500',
  emerald: 'from-emerald-500 to-lime-400',
};

const LinkButton: FC<{ link: LinkItem }> = ({ link }) => {
  const Icon = link.icon;

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center justify-between rounded-3xl border border-slate-200/70 bg-slate-100/90 px-5 py-5 shadow-xl shadow-slate-950/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-200/90 hover:shadow-slate-950/20 dark:border-white/10 dark:bg-slate-900/80 dark:hover:bg-slate-900/95"
    >
      <div className="flex items-center gap-4">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accentClasses[link.accent]} text-white shadow-lg shadow-slate-950/20`}
        >
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <p className="text-lg font-semibold text-slate-950 dark:text-white">{link.label}</p>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{link.description}</p>
        </div>
      </div>
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-200 text-slate-950 transition duration-200 group-hover:bg-slate-300 dark:bg-white/10 dark:text-slate-200 dark:group-hover:bg-white/15">
        →
      </span>
    </a>
  );
};

export default LinkButton;
