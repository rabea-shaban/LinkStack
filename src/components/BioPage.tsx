'use client';

import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import {
  FiChevronDown,
  FiChevronUp,
  FiCode,
  FiDownload,
  FiMail,
  FiPlay,
  FiZap,
} from 'react-icons/fi';
import { FaTiktok } from 'react-icons/fa6';
import LinkButton from './LinkButton';
import ProfileCard from './ProfileCard';
import {
  freelanceLinks,
  personalContactLinks,
  personalProfessionalLinks,
  personalSocialLinks,
  platformContactLinks,
  platformFacebookLink,
  platformWebsiteLink,
  tiktokFeaturedVideos,
  tiktokOfficialLink,
  youtubeFeaturedLinks,
  youtubeOfficialLink,
} from '../data/links';

const PRIMARY_EMAIL = 'rabea.elzayate@gmail.com';
const DOWNLOAD_CV_URL = 'https://flowcv.com/resume/a7n0o85l8o65';

export default function BioPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);
  const [showYoutubeVideos, setShowYoutubeVideos] = useState(true);
  const [showTiktokVideos, setShowTiktokVideos] = useState(false);

  // Sync dark class to html document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const qrCodeUrl = useMemo(
    () =>
      `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(
        `mailto:${PRIMARY_EMAIL}`,
      )}`,
    [],
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PRIMARY_EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={darkMode ? 'dark' : undefined}>
      <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        {/* Background decorations */}
        <div className="pointer-events-none absolute inset-0 bg-soft-gradient opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/4 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="pointer-events-none absolute left-5 bottom-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {/* 1. Profile Card */}
            <ProfileCard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              email={PRIMARY_EMAIL}
              onCopyEmail={handleCopyEmail}
              downloadUrl={DOWNLOAD_CV_URL}
              copied={copied}
            />

            {/* Main Links Container */}
            <div className="space-y-8 rounded-[2.5rem] border border-slate-200/80 bg-slate-100/90 p-6 shadow-glass backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/5">
              
              {/* 2. Personal & Professional Links */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-indigo-500 dark:text-indigo-400">
                    Core Profiles
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Personal & Professional
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Explore my personal engineering portfolio, GitHub repositories, and LinkedIn profile.
                  </p>
                </div>
                <div className="grid gap-3.5">
                  {personalProfessionalLinks.map((item) => (
                    <LinkButton key={item.id} link={item} />
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 3. Freelance Platforms */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-500 dark:text-emerald-400">
                    Hire Me
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Freelance Platforms
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Available for freelance development, SaaS projects, and technical consulting.
                  </p>
                </div>
                <div className="grid gap-3.5">
                  {freelanceLinks.map((item) => (
                    <LinkButton key={item.id} link={item} />
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 4. Personal Social Accounts */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-400">
                    Socialize
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Personal Social Accounts
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Follow my personal updates and programming journey on Facebook and TikTok.
                  </p>
                </div>
                <div className="grid gap-3.5">
                  {personalSocialLinks.map((item) => (
                    <LinkButton key={item.id} link={item} />
                  ))}
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 5. Khamsa Programming Belady Official Website */}
              <section className="space-y-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Educational Platform
                    </span>
                  </div>
                  <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-950 dark:text-white" dir="rtl">
                    خمسة برمجة بالبلدي
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400" dir="rtl">
                    محتوى تقني وتعليمي لتبسيط البرمجة والتكنولوجيا باللغة العربية.
                  </p>
                </div>

                <div className="overflow-hidden rounded-3xl border-2 border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-transparent p-1.5 shadow-xl">
                  <LinkButton link={platformWebsiteLink} />
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 6. YouTube & Featured Content */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-rose-500 dark:text-rose-400">
                    Video Learning
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    YouTube & Featured Videos
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Official YouTube channel and curated video tutorials for programming beginners.
                  </p>
                </div>

                {/* Primary YouTube Channel */}
                <LinkButton link={youtubeOfficialLink} />

                {/* Collapsible Featured Videos */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <button
                    type="button"
                    onClick={() => setShowYoutubeVideos((prev) => !prev)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-800 transition hover:text-indigo-600 dark:text-slate-200 dark:hover:text-indigo-400"
                  >
                    <span className="flex items-center gap-2">
                      <FiPlay className="h-4 w-4 text-rose-500" />
                      Featured Tutorials & Playlist ({youtubeFeaturedLinks.length})
                    </span>
                    {showYoutubeVideos ? (
                      <FiChevronUp className="h-4 w-4" />
                    ) : (
                      <FiChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {showYoutubeVideos && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3.5 grid gap-2.5 pt-1"
                    >
                      {youtubeFeaturedLinks.map((item) => (
                        <LinkButton key={item.id} link={item} compact />
                      ))}
                    </motion.div>
                  )}
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 7. TikTok Official Account & Featured Videos */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-500 dark:text-cyan-400">
                    Shorts & Tips
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    TikTok Content — خمسة برمجة بالبلدي
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Quick tips, graduation milestones, and simplified programming concepts.
                  </p>
                </div>

                {/* Primary TikTok Account */}
                <LinkButton link={tiktokOfficialLink} />

                {/* Collapsible Featured TikTok Videos */}
                <div className="rounded-2xl border border-slate-200/80 bg-white/60 p-4 dark:border-white/10 dark:bg-white/5">
                  <button
                    type="button"
                    onClick={() => setShowTiktokVideos((prev) => !prev)}
                    className="flex w-full items-center justify-between text-left text-sm font-semibold text-slate-800 transition hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-400"
                  >
                    <span className="flex items-center gap-2">
                      <FaTiktok className="h-4 w-4 text-cyan-400" />
                      Featured Short Videos ({tiktokFeaturedVideos.length})
                    </span>
                    {showTiktokVideos ? (
                      <FiChevronUp className="h-4 w-4" />
                    ) : (
                      <FiChevronDown className="h-4 w-4" />
                    )}
                  </button>

                  {showTiktokVideos && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mt-3.5 grid gap-2.5 pt-1"
                    >
                      {tiktokFeaturedVideos.map((item) => (
                        <LinkButton key={item.id} link={item} compact />
                      ))}
                    </motion.div>
                  )}
                </div>
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 8. Official Facebook Page */}
              <section className="space-y-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-500 dark:text-blue-400">
                    Community
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Official Facebook Page
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Join our Arabic developer community on Facebook for regular tech articles and updates.
                  </p>
                </div>
                <LinkButton link={platformFacebookLink} />
              </section>

              <hr className="border-slate-200/80 dark:border-white/10" />

              {/* 9. Contact Information */}
              <section className="space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-500 dark:text-violet-400">
                    Get in Touch
                  </span>
                  <h2 className="mt-1 text-2xl font-bold tracking-tight text-slate-950 dark:text-white">
                    Contact Information
                  </h2>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    Reach out for freelance projects, business inquiries, or educational partnerships.
                  </p>
                </div>

                {/* Personal Contact Sub-group */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-violet-500" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      Personal Contact
                    </h3>
                  </div>
                  <div className="grid gap-3">
                    {personalContactLinks.map((item) => (
                      <LinkButton key={item.id} link={item} />
                    ))}
                  </div>
                </div>

                {/* Platform Contact Sub-group */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-cyan-500" />
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                      خمسة برمجة بالبلدي Platform Contact
                    </h3>
                  </div>
                  <div className="grid gap-3">
                    {platformContactLinks.map((item) => (
                      <LinkButton key={item.id} link={item} />
                    ))}
                  </div>
                </div>

                {/* Action Widgets (QR Generator & Instant Actions) */}
                <div className="grid gap-4 pt-4 sm:grid-cols-2">
                  {/* Email QR Code Button */}
                  <button
                    type="button"
                    onClick={() => setShowQr((current) => !current)}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-left text-sm text-slate-950 shadow-md transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Email QR Generator
                        </span>
                        <FiCode className="h-5 w-5 text-indigo-400 transition duration-200 group-hover:text-indigo-500" />
                      </div>
                      <p className="mt-2 font-semibold text-slate-950 dark:text-white">
                        {showQr ? 'Hide Email QR Code' : 'Scan to Email Rabea'}
                      </p>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">
                        Generates a direct mailto: QR code for quick mobile scanning.
                      </p>
                    </div>
                    <span className="mt-4 inline-block text-xs font-medium text-indigo-500 dark:text-indigo-400">
                      {showQr ? '▲ Click to close' : '▼ Click to show QR'}
                    </span>
                  </button>

                  {/* Curated Actions Widget */}
                  <div className="flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white/90 p-5 text-slate-950 shadow-md dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100">
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400">
                          Instant Tools
                        </span>
                        <FiZap className="h-5 w-5 text-amber-500" />
                      </div>
                      <p className="mt-2 font-semibold text-slate-900 dark:text-white">
                        Direct Actions
                      </p>
                    </div>
                    <div className="mt-4 grid gap-2.5">
                      <a
                        href={DOWNLOAD_CV_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/20 transition duration-200 hover:scale-[1.01] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <FiDownload className="mr-2 h-4 w-4" />
                        Download CV
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="inline-flex items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-slate-950/70 px-4 py-2.5 text-sm font-semibold text-slate-900 dark:text-slate-100 transition duration-200 hover:bg-slate-200 dark:hover:bg-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                      >
                        <FiMail className="mr-2 h-4 w-4" />
                        {copied ? 'Email Copied!' : 'Copy Personal Email'}
                      </button>
                    </div>
                  </div>
                </div>

                {/* QR Code Card */}
                {showQr && (
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-900/90 text-center"
                  >
                    <div className="flex flex-col items-center gap-2">
                      <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                        Personal Email Contact
                      </span>
                      <h4 className="text-lg font-bold text-slate-950 dark:text-white">
                        Scan to Email: {PRIMARY_EMAIL}
                      </h4>
                      <p className="max-w-md text-xs text-slate-600 dark:text-slate-400">
                        Scan with your phone camera to instantly compose an email to Rabea Shaban. (Supports standard mailto: QR format)
                      </p>
                    </div>
                    <div className="mt-5 flex justify-center">
                      <div className="rounded-3xl border-2 border-slate-200/80 dark:border-white/10 bg-white p-4 shadow-xl">
                        <img
                          src={qrCodeUrl}
                          alt={`QR Code to email ${PRIMARY_EMAIL}`}
                          className="h-56 w-56 rounded-2xl"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </section>

            </div>

            {/* Footer */}
            <footer className="text-center py-6 text-xs text-slate-500 dark:text-slate-500">
              <p>© 2026 Rabea Shaban (ربيع شعبان) • LinkStack</p>
              <p className="mt-1">Full Stack Software Engineer & Founder of خمسة برمجة بالبلدي</p>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
}
