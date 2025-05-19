export const loginMeta = {
  title: "Log In",
  description:
    "Access your Snaprise account to manage projects and photos.",
} as const;

export const registerMeta = {
  title: "Register",
  description:
    "Create a Snaprise account to start showcasing your service work.",
} as const;

export const forgotPasswordMeta = {
  title: "Forgot Password",
  description: "Reset your Snaprise account password.",
} as const;

export const dashboardMeta = {
  title: "Dashboard",
  description:
    "Your Snaprise dashboard—quick access to recent projects and stats.",
} as const;

export const projectsListMeta = {
  title: "Projects",
  description:
    "View, create, and organize all your Snaprise projects in one place.",
} as const;

export type LoginMetaType = typeof loginMeta;
export type RegisterMetaType = typeof registerMeta;
export type ForgotPasswordMetaType = typeof forgotPasswordMeta;
export type DashboardMetaType = typeof dashboardMeta;
export type ProjectsListMetaType = typeof projectsListMeta;
