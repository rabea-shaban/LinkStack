import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://rabea-link-stack.vercel.app'),
  title: 'Rabea Shaban | مطور واجهات أمامية React وNext.js',
  description:
    'الروابط المهنية ومشاريع ربيع شعبان، مطور واجهات أمامية متخصص في React.js وNext.js.',
  keywords: [
    'Rabea Shaban',
    'ربيع شعبان',
    'Frontend Developer',
    'مطور واجهات أمامية',
    'React.js',
    'Next.js',
    'Portfolio',
    'Link-in-Bio',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Rabea Shaban | مطور واجهات أمامية React وNext.js',
    description:
      'الروابط المهنية ومشاريع ربيع شعبان، مطور واجهات أمامية متخصص في React.js وNext.js.',
    url: '/',
    siteName: 'Rabea Shaban | LinkStack',
    locale: 'ar_EG',
    type: 'website',
    images: [
      {
        url: '/rabea.jpg',
        width: 1536,
        height: 1536,
        alt: 'Rabea Shaban — الصورة الشخصية الرسمية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rabea Shaban | مطور واجهات أمامية React وNext.js',
    description:
      'الروابط المهنية ومشاريع ربيع شعبان، مطور واجهات أمامية متخصص في React.js وNext.js.',
    images: ['/rabea.jpg'],
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
    <html lang="ar" className="scroll-smooth dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
