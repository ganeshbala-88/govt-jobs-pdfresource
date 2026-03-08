import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO + site verification metadata
export const metadata: Metadata = {
  title: "All India Govt Jobs Resources 2026 | Notifications, Syllabus & PDFs",
  description:
    "Latest Central and State government job notifications, Indian Army, Police, SSC, UPSC, and official syllabus PDFs. All resources linked directly from authentic government websites.",
  // Optional: keywords
  // keywords: seoKeywords.join(", "),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Search Console verification */}
        <meta
          name="google-site-verification"
          content="kdzJdmBtS_s3Thqaowa8BDsqUl4X4TXo91NNwDdlU1M"
        />
        
        {/* Google AdSense Integration (Replace ca-pub-XXXXX with your real Publisher ID) */}
        <Script
          id="adsbygoogle-init"
          strategy="afterInteractive"
          crossOrigin="anonymous"
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-0000000000000000`}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        
        {/* Google Analytics to Track Traffic (Replace G-XXXX... with your Measurement ID) */}
        {/* Check https://analytics.google.com to get your Measurement ID */}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}
