import type { Metadata } from "next";
import { RegisterForm } from "./register-form";
import { registerMeta } from "@/constants/metadata";

export const metadata: Metadata = {
  title: registerMeta.title,
  description: registerMeta.description,
};

export default function RegisterPage() {
  return (
    <div className="container my-10 flex flex-col items-center justify-center">
      <div className="mx-auto flex w-full max-w-md flex-col justify-center space-y-6">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your information to create a SnapRise account
          </p>
        </div>
        <RegisterForm />
      </div>
    </div>
  );
}
