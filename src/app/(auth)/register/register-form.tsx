"use client";

import {
  registerSchema,
  type RegisterSchema,
} from "@/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/config/firebase";
import { toast } from "sonner";
import { FirebaseError } from "firebase/app";
import {
  firebaseErrorCodes,
  somethingWentWrong,
  type FirebaseErrorCode,
} from "@/constants/firebaseErrors";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      middleName: "",
    },
  });

  const onSubmit = async (data: RegisterSchema) => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      toast.success("Account created successfully");
      reset();
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
          <CardTitle className="text-xl">Create an account</CardTitle>
          <CardDescription>
            Enter your details below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label
                htmlFor="firstName"
                data-error={errors.firstName}
              >
                First Name
              </Label>
              <Input
                id="firstName"
                placeholder="John"
                {...register("firstName")}
              />
              {errors.firstName && (
                <p className="text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName" data-error={errors.lastName}>
                Last Name
              </Label>
              <Input
                id="lastName"
                placeholder="Doe"
                {...register("lastName")}
              />
              {errors.lastName && (
                <p className="text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label
              htmlFor="middleName"
              data-error={errors.middleName}
            >
              Middle Name (Optional)
            </Label>
            <Input
              id="middleName"
              placeholder="Middle name"
              {...register("middleName")}
            />
            {errors.middleName && (
              <p className="text-sm text-red-500">
                {errors.middleName.message}
              </p>
            )}
          </div>
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
            <Label htmlFor="password" data-error={errors.password}>
              Password
            </Label>
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

            {errors.root && (
              <p className="text-sm text-red-500">
                {errors.root.message}
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="mt-4 flex flex-col">
          <Button
            className="w-full"
            type="submit"
            isLoading={isSubmitting}
          >
            Create account
          </Button>
          <p className="text-muted-foreground mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-primary hover:underline"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
}
