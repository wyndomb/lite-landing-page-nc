import type { Metadata } from "next";
import { Roboto, Lora } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "Newsletter AI Studio - AI-Powered Newsletter Growth",
  description:
    "AI-powered studio for newsletter creators to boost reach, repurpose content, and grow their audience engagement.",
  keywords: [
    "newsletter",
    "AI",
    "content creation",
    "Substack",
    "email marketing",
  ],
  authors: [{ name: "Wyndo & Joel Salinas" }],
  openGraph: {
    title: "Newsletter AI Studio",
    description:
      "AI-powered tools for newsletter creators to grow their audience and create compelling content.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Newsletter AI Studio",
    description:
      "AI-powered tools for newsletter creators to grow their audience and create compelling content.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lora.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
