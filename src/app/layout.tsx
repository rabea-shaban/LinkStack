import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rabea Shaban | Personal Link-in-Bio',
  description:
    'Rabea Shaban | Frontend Developer | React.js & Next.js personal link-in-bio page.',
  openGraph: {
    title: 'Rabea Shaban | Personal Link-in-Bio',
    description: 'Modern portfolio and contact hub for Rabea Shaban.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020617',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
