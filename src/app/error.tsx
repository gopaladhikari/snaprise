"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="from-background to-muted/30 flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-b px-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <AlertTriangle className="text-destructive h-64 w-64" />
          </div>
          <div className="bg-background/80 relative rounded-lg border p-8 shadow-lg backdrop-blur-sm">
            <AlertTriangle className="text-destructive mx-auto mb-4 h-12 w-12" />
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
              Something went wrong
            </h1>
            <p className="text-muted-foreground mb-6">
              We encountered an unexpected error. Our team has been
              notified and is working to fix the issue.
            </p>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button onClick={() => reset()}>
                <RefreshCw className="mr-2 h-4 w-4" />
                Try again
              </Button>
              <Link
                href="/"
                className={buttonVariants({
                  variant: "outline",
                })}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
            </div>
          </div>
        </div>
        {error.digest && (
          <p className="text-muted-foreground text-sm">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
