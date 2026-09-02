import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import { cn } from '@/lib/utils';
import { AppProvider } from '@/app/provider';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

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
      className={cn('h-full', 'antialiased', 'font-sans', inter.variable)}
    >
      <body className="flex min-h-full flex-col">
        <main className="flex-1">
          <AppProvider>{children}</AppProvider>
        </main>
        <footer className="mt-10 border-t py-6" />
      </body>
    </html>
  );
}
