import "@/app/globals.css";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { DM_Sans, Geist_Mono } from "next/font/google";

const fontSans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fontMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: "ai-blocks-beta.vercel.app",
  title: {
    default: "ai-blocks-beta.vercel.app — Building Blocks for the Web",
    template: "%s — ai-blocks-beta.vercel.app",
  },
  description: siteConfig.description,
  keywords: [
    "React UI blocks",
    "Tailwind components",
    "shadcn/ui",
    "Next.js components",
    "Open source UI",
    "Copy paste components",
  ],
  authors: [
    {
      name: "Ephraim Duncan",
      url: "https://ephraimduncan.com",
    },
  ],
  creator: "Ephraim Duncan",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "ai-blocks-beta.vercel.app — Building Blocks for the Web",
    description: siteConfig.description,
    siteName: "ai-blocks-beta.vercel.app",
    images: [siteConfig.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "ai-blocks-beta.vercel.app — Building Blocks for the Web",
    description: siteConfig.description,
    creator: "@ephraimduncan_",
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(fontSans.variable, fontMono.variable, "antialiased")}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          {children}

          <TailwindIndicator />
          <Toaster />
          <SeoJsonLd />
        </ThemeProvider>
      </body>
    </html>
  );
}
