import type { Metadata } from "next";
import { LoginForm } from "./login-form";
import { loginMeta } from "@/constants/metadata";

export const metadata: Metadata = {
  title: loginMeta.title,
  description: loginMeta.description,
};

export default function LoginPage() {
  return (
    <div className="container my-10 flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome back
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your credentials to sign in to your account
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
