import type { Metadata } from 'next';
import { Doppio_One as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

import { SiteFooter } from "@src/components/SiteFooter";
import { SiteHeader } from "@src/components/SiteHeader";
import { TailwindIndicator } from "@src/components/TailwindIndicator";
import { ThemeProvider } from "@src/components/ui/ThemeProvider";
import { Toaster } from "@src/components/ui/toaster"

import "./globals.css";

export const metadata: Metadata = {
  title: 'Greg Asquith | Home',
  description: 'Greg Asquith | Technical consulting and solution creation',
};

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: "400"
})

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-white font-sans text-slate-900 antialiased dark:bg-gray-800 dark:text-slate-50",
            fontSans.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex min-h-screen flex-col">
              <SiteHeader />
              <div className="container flex-1">{children}</div>
              <SiteFooter />
              <TailwindIndicator />
            </div>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  )
}