import type { Metadata } from "next";

export const loginMeta: Metadata = {
  title: "Log In",
  description:
    "Access your Snaprise account to manage projects and photos.",
} as const;

export const registerMeta: Metadata = {
  title: "Register",
  description:
    "Create a Snaprise account to start showcasing your service work.",
} as const;

export const forgotPasswordMeta: Metadata = {
  title: "Forgot Password",
  description: "Reset your Snaprise account password.",
} as const;

export const dashboardMeta: Metadata = {
  title: "Dashboard",
  description:
    "Your Snaprise dashboard—quick access to recent projects and stats.",
} as const;

export const projectsListMeta: Metadata = {
  title: "Projects",
  description:
    "View, create, and organize all your Snaprise projects in one place.",
} as const;
