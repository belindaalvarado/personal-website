import type { Metadata } from 'next';
import { Comfortaa, Nunito, Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  display: 'swap', 
  variable: '--font-playfair'
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  display: 'swap', 
  variable: '--font-nunito'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal'],
  display: 'swap', 
  variable: '--font-roboto',
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  display: 'swap', 
  variable: '--font-comfortaa',
});

export const metadata: Metadata = {
  title: 'Belindas Personal Portfolio',
  description: 'Here is my personal website where tell a little about me and highlight some projects I have worked on.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${playfair.className} ${nunito.className} ${roboto.className} ${comfortaa.className}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}