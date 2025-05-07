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

  publisher: "Snaprise",
  creator: "Gopal Adhikari",
  openGraph: {
    title: "Snaprise",
    description:
      "A clean, professional photo gallery platform for contractors, cleaners, and service providers.",
    type: "website",
    locale: "en_US",
    siteName: "Snaprise",
  },

  alternates: {
    canonical: "https://www.gopal-adhikari.com.np",
  },
  twitter: {
    title: "Snaprise",
    description:
      "A clean, professional photo gallery platform for contractors, cleaners, and service providers.",
    card: "summary_large_image",
  },

  metadataBase: new URL("https://www.gopal-adhikari.com.np"),
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
