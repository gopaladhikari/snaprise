import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Snaprise",
  description:
    "A clean, professional photo gallery platform for contractors, cleaners, and service providers.",
  keywords: [
    "Snaprise",
    "Photo Gallery",
    "Contractors",
    "Cleaners",
    "Service Providers",
  ],

  category: "Business",

  authors: {
    name: "Gopal Adhikari",
    url: "https://www.gopal-adhikari.com.np",
  },

  publisher: "Gopal Adhikari",
  creator: "Gopal Adhikari",
  openGraph: {
    title: "Snaprise",
    description:
      "A clean, professional photo gallery platform for contractors, cleaners, and service providers.",
    type: "website",
    locale: "en_US",
    siteName: "Snaprise",
    url: "https://snaprise.netlify.app",
    images: {
      url: "https://snaprise.netlify.app/og-image.png",
      width: 1080,
      height: 1350,
    },
  },

  alternates: {
    canonical: "https://snaprise.netlify.app",
    languages: {
      en: "en-US",
    },
  },
  twitter: {
    title: "Snaprise",
    description:
      "A clean, professional photo gallery platform for contractors, cleaners, and service providers.",
    card: "summary_large_image",
    images: {
      url: "https://snaprise.netlify.app/og-image.png",
      width: 1200,
      height: 630,
    },
    creator: "@gopuadks",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Snaprise",
    statusBarStyle: "black-translucent",
  },

  metadataBase: new URL("https://snaprise.netlify.app"),
  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "16x16",
        type: "image/x-icon",
      },

      {
        url: "/favicon/16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/favicon/512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: {
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export const menus = {
  main: [
    {
      label: "Login",
      href: "/login",
    },
    {
      label: "Register",
      href: "/register",
    },
  ],
};
