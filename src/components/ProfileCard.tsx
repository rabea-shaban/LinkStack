import { motion } from 'framer-motion';
import type { Dispatch, FC, SetStateAction } from 'react';
import { FiArrowRight, FiMoon, FiSun } from 'react-icons/fi';
import img from '../imge/rabea.jpg';

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
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="rounded-[2.5rem] border border-slate-200/70 bg-white/90 p-6 shadow-glass backdrop-blur-xl text-slate-950 sm:p-8 dark:border-white/10 dark:bg-slate-900/70 dark:text-slate-100"
    >
      <div className="flex flex-col items-center text-center gap-6">
        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-indigo-500/30 via-transparent to-fuchsia-500/25 blur-2xl" />
          <img
            src={img}
            alt="Rabea Shaban profile"
            className="h-32 w-32 rounded-full border border-white/10 object-cover shadow-2xl shadow-slate-950/20"
          />
        </div>

        {/* Info */}
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">
            Rabea Shaban
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Frontend Developer
          </h1>

          <p className="text-base text-slate-700 dark:text-slate-300 sm:text-lg">
            MERN Stack Developer specializing in React.js & Next.js, building scalable,
            high-performance SaaS applications with clean architecture and seamless frontend-backend
            integration.
          </p>

          {/* Availability Badge */}
          <div className="flex justify-center">
            <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
              Available for work
            </span>
          </div>

          {/* Email */}
          <p className="text-sm text-slate-500 dark:text-slate-400">{email}</p>
        </div>

        {/* Actions */}
        <div className="grid w-full gap-4 sm:grid-cols-[1fr_auto]">
          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            onClick={() => setDarkMode((value) => !value)}
            className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-100 px-5 py-3 text-sm text-slate-950 transition duration-200 hover:bg-slate-200 hover:shadow-lg hover:shadow-slate-950/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10"
          >
            {darkMode ? (
              <>
                <FiSun className="h-4 w-4" />
                Switch to light mode
              </>
            ) : (
              <>
                <FiMoon className="h-4 w-4" />
                Switch to dark mode
              </>
            )}
          </motion.button>

          {/* Buttons */}
          <div className="grid gap-3 sm:grid-cols-2">
            {/* Primary CTA */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={downloadUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 text-sm font-semibold text-white transition duration-200 hover:shadow-xl hover:shadow-indigo-500/25"
            >
              Download CV
            </motion.a>

            {/* Copy Email */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={onCopyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-slate-950/80 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900"
            >
              <FiArrowRight className="h-4 w-4" />
              {copied ? 'Copied!' : 'Copy email'}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProfileCard;
