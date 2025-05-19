import type { Metadata, Viewport } from "next";
import { cn } from "@/lib/utils";
import { poppins, roboto } from "@/config/fonts";
import { siteConfig } from "@/constants/siteConfig";
import { Header } from "@/components/partials/header";
import { Footer } from "@/components/partials/footer";
import { Toaster } from "sonner";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Snaprise",
    default: "Snaprise",
  },
  alternates: siteConfig.alternates,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: siteConfig.authors,
  publisher: siteConfig.publisher,
  creator: siteConfig.creator,
  openGraph: siteConfig.openGraph,
  twitter: siteConfig.twitter,
  metadataBase: siteConfig.metadataBase,
  icons: siteConfig.icons,
  manifest: siteConfig.manifest,
  appleWebApp: siteConfig.appleWebApp,
};

export const viewport: Viewport = {
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(poppins.variable, roboto.variable)}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <div>
          <Toaster richColors position="bottom-right" />
        </div>
      </body>
    </html>
  );
}
