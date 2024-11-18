import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import PageLayout from '@/components/PageLayout/PageLayout';
import ChatLayout from '@/components/ChatLayout/ChatLayout';
import ChatBody from '@/components/ChatBody/ChatBody';

const geistSans = localFont({
  src: '/fonts/GeistVF.woff', // Ensure the correct path to fonts
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: '/fonts/GeistMonoVF.woff', // Ensure the correct path to fonts
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Multichat',
  description: 'Perform multiple chat with AI',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PageLayout>
          <ChatLayout>
            <ChatBody>{children}</ChatBody>
          </ChatLayout>
        </PageLayout>
      </body>
    </html>
  );
}
