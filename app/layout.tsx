import './assets/globals.css';

import { Metadata } from 'next';
import Link from 'next/link';
import { Analytics } from '@vercel/analytics/react';
import localFont from 'next/font/local';
import { JetBrains_Mono } from 'next/font/google';

import clsx from 'clsx';

const SaansFont = localFont({
  src: './saans-font.woff2',
  display: 'swap',
});

const JetBrainsMonoFont = JetBrains_Mono({
  display: 'swap',
  variable: '--font-monospace',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Dominic Bor - Software Engineer',
  description:
    'Dominic Bor is a software engineer based Remote, working somewhere on the boundary between design and code.',
  twitter: {
    card: 'summary_large_image',
    creator: '@sirbor',
    images: ['/og.png'],
    title: 'Dominic Bor - Software Engineer',
  },
  openGraph: {
    title: 'Dominic Bor - Software Engineer',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Dominic Bor - Software Engineer',
      },
    ],
    siteName: 'Dominic Bor - Software Engineer',
  },
  metadataBase: new URL('https://dominicbor.me'),
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Dominic Bor',
  image: 'https://dominicbor.me/avatar.jpeg',
  url: 'https://dominicbor.me',
  jobTitle: 'Software Engineer',
  sameAs: [
    'https://twitter.com/sirbor',
    'https://www.github.com/sirbor',
    'https://www.linkedin.com/in/sirbor/',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={clsx(
          SaansFont.className,
          JetBrainsMonoFont.variable,
          'bg-slate-50'
        )}
      >
        <div className="max-w-2xl lg:max-w-xl mx-auto">
          <header className="pt-8 md:pt-16 pb-16 px-4 md:px-0 flex justify-between">
            <Link href="/">
              <h1 className="text-base font-mono font-semibold text-slate-950">
                dk
              </h1>
            </Link>
            <nav className="flex gap-4">
              <Link
                href="/info"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Information
              </Link>
              <Link
                href="/posts"
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
              >
                Writing
              </Link>
              <Link
                className="text-950 text-sm tracking-tighter font-mono font-semibold"
                href="/contact"
              >
                Contact
              </Link>
            </nav>
          </header>
          {children}
          <footer className="px-4 md:px-0 border-t border-slate-200 py-8 text-slate-700 font-mono text-xs tracking-tight flex justify-between">
            <p>
              &copy; 2010 - {new Date().getFullYear()} {'/'} Dominic Bor
            </p>
            <p>
              <Link href="https://github.com/sirbor/portfolio">View Source</Link>
            </p>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
