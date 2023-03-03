import { Doppio_One as FontSans } from "next/font/google";

import './globals.css';

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: "400"
});

export const metadata = {
  title: 'gregasquith.com',
  description: 'Greg Asquith | Technical consulting and solution creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
