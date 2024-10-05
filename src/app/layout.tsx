import type { Metadata } from 'next';
import { Albert_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const fontSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Amora',
  description: 'Laget av meg',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="no">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
