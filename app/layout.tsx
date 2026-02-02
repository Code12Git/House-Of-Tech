import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "@/components/providers/ToastProvider";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "House of Tech | Learn Modern Web Development",
  description: "Master full-stack development with Next.js, React, TypeScript, and MongoDB. Learn from industry experts.",
  keywords: "Next.js, React, TypeScript, Web Development, Course, Learning",
  authors: [{ name: "Saksham Saxena" }],
  openGraph: {
    title: "House of Tech | Learn Modern Web Development",
    description: "Master full-stack development with Next.js, React, TypeScript, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        <AuthProvider>
          <ToastProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
