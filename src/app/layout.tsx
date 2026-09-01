import type { Metadata } from 'next';
import { Geist, Geist_Mono, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { AppProvider } from '@/app/provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'TMDB - Discover Movies',
  description:
    'Browse, filter, and sort popular movies powered by The Movie Database',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        'h-full',
        'antialiased',
        geistSans.variable,
        geistMono.variable,
        'font-sans',
        inter.variable,
      )}
    >
      <body className="flex min-h-full flex-col">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
