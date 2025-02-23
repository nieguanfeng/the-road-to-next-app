import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Nie Guanfeng Next",
  description: "My Nie Guanfeng to Next application ...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <Header/>
          <main 
            className="
              min-h-screen
              flex-1
              overflow-y-auto
              overflow-x-hidden
              py-24 px-8
              bg-secondary/20
              flex flex-col
            "
          >{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
