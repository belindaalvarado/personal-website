import type { Metadata } from 'next';
import { Comfortaa, Nunito, Playfair_Display, Roboto } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  variable: '--font-playfair'
});

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal'],
  variable: '--font-nunito'
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['500'],
  style: ['normal'],
  variable: '--roboto'
});

const comfortaa = Comfortaa({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal'],
  variable: '--font-comfortaa'
});

export const metadata: Metadata = {
  title: 'Belindas Personal Portfolio',
  description:"Here is my personal website where tell a little about me and highlight some projects I've worked on.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${nunito.className} ${roboto.className} ${comfortaa.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
