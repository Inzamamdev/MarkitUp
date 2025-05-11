"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

import { Toaster } from "react-hot-toast";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>SoftSell</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster
            position="top-center"
            toastOptions={{
              duration: 4000,
              style: {
                background: "#fff",
                color: "#1f2937",
                border: "1px solid #e5e7eb",
              },
              className:
                "dark:bg-gray-800 dark:text-gray-200 dark:border-gray-600",
              success: {
                style: {
                  borderColor: "#10b981",
                },
              },
              error: {
                style: {
                  borderColor: "#ef4444",
                },
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
