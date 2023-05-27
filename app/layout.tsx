import Nav from '@/components/Nav';
import './globals.css';
import { Inter } from 'next/font/google';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'PromptGenius',
  description: 'Unlocking AI&apos;s Potential',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col min-h-screen items-center`}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
