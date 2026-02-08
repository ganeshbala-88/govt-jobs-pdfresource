import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
