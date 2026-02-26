import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Geist, Geist_Mono, Lexend } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
});

const siteUrl = "https://shadcn-cookies.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "shadcn/ui cookies - Cookie Consent Component",
    template: "%s | shadcn/ui cookies",
  },
  description:
    "Sleek and flexible cookie consent solution for the web, designed with shadcn/ui. A beautiful, customizable, and accessible cookie consent component.",
  keywords: [
    "shadcn",
    "shadcn/ui",
    "cookie consent",
    "cookies",
    "react cookie consent",
    "nextjs cookie consent",
    "cookie banner",
    "gdpr",
    "cookie compliance",
    "tailwind css",
    "radix ui",
    "react component",
    "nextjs component",
  ],
  authors: [{ name: "kaizenics", url: "https://github.com/kaizenics" }],
  creator: "kaizenics",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "shadcn/ui cookies",
    title: "shadcn/ui cookies - Cookie Consent Component",
    description:
      "Sleek and flexible cookie consent solution for the web, designed with shadcn/ui. A beautiful, customizable, and accessible cookie consent component.",
  },
  twitter: {
    card: "summary_large_image",
    title: "shadcn/ui cookies - Cookie Consent Component",
    description:
      "Sleek and flexible cookie consent solution for the web, designed with shadcn/ui.",
    creator: "@kaizenics",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareSourceCode",
  name: "shadcn/ui cookies",
  description:
    "Sleek and flexible cookie consent solution for the web, designed with shadcn/ui. A beautiful, customizable, and accessible cookie consent component.",
  url: siteUrl,
  codeRepository: "https://github.com/kaizenics/shadcn-cookies",
  programmingLanguage: ["TypeScript", "React", "Next.js"],
  runtimePlatform: "Node.js",
  author: {
    "@type": "Person",
    name: "kaizenics",
    url: "https://github.com/kaizenics",
  },
  license: "https://opensource.org/licenses/MIT",
  operatingSystem: "Any",
  applicationCategory: "DeveloperApplication",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lexend.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
