import type { Metadata, Viewport } from "next";
import "./globals.css";
import { PWAInstallPrompt } from "@/components/pwa/PWAInstallPrompt";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://apex-gym.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "APEX GYM | Train Beyond Limits",
    template: "%s | APEX GYM",
  },
  description:
    "Premium gym membership, expert coaching, workouts, nutrition tracking, classes, rewards and AI-assisted fitness tools.",
  applicationName: "APEX GYM",
  keywords: [
    "gym",
    "fitness",
    "personal training",
    "workout tracking",
    "nutrition",
    "gym membership",
  ],
  openGraph: {
    title: "APEX GYM",
    description: "Train, track and progress with a premium digital fitness experience.",
    type: "website",
    url: siteUrl,
    siteName: "APEX GYM",
  },
  twitter: {
    card: "summary",
    title: "APEX GYM",
    description: "Premium gym membership and digital fitness experience.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <PWAInstallPrompt />
      </body>
    </html>
  );
}
