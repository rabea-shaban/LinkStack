'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { Dispatch, FC, SetStateAction } from 'react';
import { FiArrowRight, FiCheck, FiMoon, FiSun } from 'react-icons/fi';
import profileImg from '../imge/rabea.jpg';

type Props = {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
  email: string;
  onCopyEmail: () => void;
  downloadUrl: string;
  copied: boolean;
};

const ProfileCard: FC<Props> = ({
  darkMode,
  setDarkMode,
  email,
  onCopyEmail,
  downloadUrl,
  copied,
}) => {
  return (
    <section className="rounded-[2.5rem] border border-slate-200/80 bg-white/90 p-6 shadow-glass backdrop-blur-xl text-slate-950 sm:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100">
      <div className="flex flex-col items-center text-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/30 via-transparent to-fuchsia-500/25 blur-2xl" />
          <Image
            src={profileImg}
            alt="Rabea Shaban | ربيع شعبان"
            priority
            unoptimized
            className="h-32 w-32 rounded-full border-2 border-indigo-500/20 object-cover shadow-2xl shadow-slate-950/20"
          />
        </div>

        {/* Info */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200/70 dark:border-white/10 px-4 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            <span>Rabea Shaban</span>
            <span>•</span>
            <span dir="rtl">ربيع شعبان</span>
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-4xl">
            Full Stack Software Engineer
          </h1>

          <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed sm:text-lg">
            Full Stack Software Engineer specializing in React.js, Next.js, TypeScript, Node.js, and MongoDB. Building modern, scalable web applications and sharing my programming journey.
          </p>

          {/* Availability Badge */}
          <div className="flex justify-center pt-1">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Available for work & freelance projects
            </span>
          </div>

          {/* Primary Email */}
          <p className="text-sm font-mono text-slate-500 dark:text-slate-400">{email}</p>
        </div>

        {/* Actions */}
        <div className="grid w-full gap-3 sm:grid-cols-[1fr_auto]">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200/80 bg-slate-100 px-5 py-3 text-sm font-medium text-slate-950 transition duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <>
                <FiSun className="h-4 w-4 text-amber-400" />
                <span>Switch to light mode</span>
              </>
            ) : (
              <>
                <FiMoon className="h-4 w-4 text-indigo-500" />
                <span>Switch to dark mode</span>
              </>
            )}
          </motion.button>

          {/* Action Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Download CV */}
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:shadow-indigo-500/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              Download CV
            </motion.a>

            {/* Copy Email */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 transition duration-200 hover:bg-slate-50 dark:hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
            >
              {copied ? (
                <>
                  <FiCheck className="h-4 w-4 text-emerald-500" />
                  <span>Copied!</span>
                </>
              ) : (
                <>
                  <FiArrowRight className="h-4 w-4 text-indigo-400" />
                  <span>Copy email</span>
                </>
              )}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
