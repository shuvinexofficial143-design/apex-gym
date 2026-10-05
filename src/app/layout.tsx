import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWAInstallPrompt } from "@/components/pwa/PWAInstallPrompt";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "APEX GYM | Coach-Led Training & Membership",
    template: "%s | APEX GYM",
  },
  description:
    "Coach-led gym training, structured programs, memberships, classes, progress tracking and a modern member experience.",
  applicationName: "APEX GYM",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "strength training",
    "gym membership",
    "fitness classes",
    "workout tracking",
  ],
  openGraph: {
    title: "APEX GYM",
    description: "Coach-led training, structured programs and a modern member experience.",
    type: "website",
    url: siteConfig.siteUrl,
    siteName: "APEX GYM",
  },
  twitter: {
    card: "summary",
    title: "APEX GYM",
    description: "Coach-led gym training and structured fitness programs.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    name: siteConfig.name,
    url: siteConfig.siteUrl,
    ...(siteConfig.phone ? { telephone: siteConfig.phone } : {}),
    ...(siteConfig.email ? { email: siteConfig.email } : {}),
    ...(siteConfig.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: siteConfig.address,
          },
        }
      : {}),
  };

  return (
    <html lang="en">
      <body>
        {children}
        <PWAInstallPrompt />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </body>
    </html>
  );
}
