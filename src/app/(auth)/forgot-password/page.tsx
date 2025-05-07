import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Forgot Password | SnapRise",
  description: "Reset your SnapRise password",
};

export default function ForgotPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">
            Forgot your password?
          </h1>
          <p className="text-muted-foreground text-sm">
            Enter your email address and we&apos;ll send you a link to
            reset your password
          </p>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Reset Password</CardTitle>
            <CardDescription>
              We&apos;ll email you instructions to reset your password
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit">
              Send reset link
            </Button>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-primary hover:underline"
              >
                Back to login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
