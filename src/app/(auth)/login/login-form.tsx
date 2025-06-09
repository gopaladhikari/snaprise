"use client";

import { loginSchema, type LoginSchema } from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
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
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { FirebaseError } from "firebase/app";
import {
  firebaseErrorCodes,
  somethingWentWrong,
  type FirebaseErrorCode,
} from "@/constants/firebaseErrors";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    setError,
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit: SubmitHandler<LoginSchema> = async (data) => {
    try {
      const credentials = await signInWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log({ credentials });

      router.push("/dashboard");
    } catch (error) {
      if (error instanceof FirebaseError) {
        if (error.code in firebaseErrorCodes) {
          setError("root", {
            type: "manual",
            message:
              firebaseErrorCodes[error.code as FirebaseErrorCode],
          });
        }
      } else
        setError("root", {
          type: "manual",
          message: somethingWentWrong,
        });
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <CardHeader>
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid gap-2">
            <Label htmlFor="email" data-error={errors.email}>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password" data-error={errors.password}>
                Password
              </Label>
              <Link
                href="/forgot-password"
                className="text-primary text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              {...register("password")}
            />
            {errors.password && (
              <p className="text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          {errors.root && (
            <p className="text-sm text-red-500">
              {errors.root.message}
            </p>
          )}
        </CardContent>
        <CardFooter className="mt-4 flex flex-col gap-4">
          <Button
            className="w-full"
            type="submit"
            isLoading={isSubmitting}
          >
            Login
          </Button>
          <Button
            className="w-full"
            type="button"
            variant="secondary"
            onClick={() => {
              setValue("email", "guest@snaprise.com");
              setValue("password", "guest@snaprise");
              handleSubmit(onSubmit)();
            }}
          >
            Guest Login
          </Button>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/register"
              className="text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
