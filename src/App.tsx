import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { FiClipboard, FiCode, FiDownload, FiZap } from 'react-icons/fi';
import LinkButton from './components/LinkButton';
import ProfileCard from './components/ProfileCard';
import { contactLinks, freelanceLinks, mainLinks } from './data/links';

const EMAIL = 'rabea.elzayate@gmail.com';
const DOWNLOAD_CV_URL = 'https://flowcv.com/resume/a7n0o85l8o65';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [copied, setCopied] = useState(false);
  const [showQr, setShowQr] = useState(false);

  const qrCodeUrl = useMemo(
    () =>
      `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${encodeURIComponent(`mailto:${EMAIL}`)}`,
    [],
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={darkMode ? 'dark' : undefined}>
      <main className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-slate-100">
        <div className="pointer-events-none absolute inset-0 bg-soft-gradient opacity-70" />
        <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-1/4 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />

        <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-4 py-10 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <ProfileCard
              darkMode={darkMode}
              setDarkMode={setDarkMode}
              email={EMAIL}
              onCopyEmail={handleCopyEmail}
              downloadUrl={DOWNLOAD_CV_URL}
              copied={copied}
            />

            <div className="grid gap-6 rounded-3xl border border-slate-200/70 bg-slate-100/90 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <div className="space-y-1">
                <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                  Links
                </p>
                <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                  All my professional profiles
                </h2>
                <p className="max-w-2xl text-slate-600 dark:text-slate-400 sm:text-base">
                  Clean, fast, and high-conversion access to my portfolio, engineering work,
                  freelance profiles, and contact options.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {mainLinks.map((item) => (
                  <LinkButton key={item.id} link={item} />
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {freelanceLinks.map((item) => (
                  <LinkButton key={item.id} link={item} />
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-1">
                {contactLinks.map((item) => (
                  <LinkButton key={item.id} link={item} />
                ))}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setShowQr((current) => !current)}
                  className="group inline-flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/90 px-5 py-4 text-left text-sm text-slate-950 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:bg-slate-900"
                >
                  <span>
                    <span className="mb-1 block text-sm text-slate-500 dark:text-slate-400">
                      QR Code
                    </span>
                    <span className="font-medium text-slate-950 dark:text-white">
                      Toggle email QR generator
                    </span>
                  </span>
                  <FiCode className="h-5 w-5 text-indigo-400 transition duration-200 group-hover:text-cyan-300" />
                </button>

                <div className="rounded-2xl border border-slate-200/70 bg-white/90 p-4 text-slate-950 dark:border-white/10 dark:bg-slate-900/80 dark:text-slate-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400">
                        Curated actions
                      </p>
                      <p className="mt-1 text-slate-900 dark:text-white">
                        Instant tools for visitors
                      </p>
                    </div>
                    <FiZap className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div className="mt-4 grid gap-3">
                    <a
                      href={DOWNLOAD_CV_URL}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 transition duration-200 hover:scale-[1.01]"
                    >
                      <FiDownload className="mr-2 h-4 w-4" />
                      Download CV
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm font-semibold text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-900"
                    >
                      <FiClipboard className="mr-2 h-4 w-4" />
                      {copied ? 'Email copied' : 'Copy email'}
                    </button>
                  </div>
                </div>
              </div>

              {showQr ? (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-3xl border border-slate-200/70 bg-slate-50/90 p-6 shadow-glass backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80"
                >
                  <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between">
                    <div>
                      <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                        QR Generator
                      </p>
                      <p className="mt-2 text-lg font-semibold text-slate-950 dark:text-white">
                        Scan to email
                      </p>
                    </div>
                    <span className="rounded-2xl bg-slate-900/80 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cyan-300">
                      Secure contact
                    </span>
                  </div>
                  <div className="mt-6 flex justify-center">
                    <img
                      src={qrCodeUrl}
                      alt="Email QR code"
                      className="h-64 w-64 rounded-3xl border border-white/10 bg-slate-900 p-4 shadow-2xl shadow-slate-900/30"
                    />
                  </div>
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

export default App;
