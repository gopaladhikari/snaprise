import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { MapPin, ArrowLeft, Search } from "lucide-react";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="from-background to-muted/30 flex min-h-[100dvh] flex-col items-center justify-center bg-gradient-to-b px-4">
      <div className="flex max-w-md flex-col items-center space-y-6 text-center">
        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <MapPin className="text-primary h-64 w-64" />
          </div>
          <div className="bg-background/80 relative rounded-lg border p-8 shadow-lg backdrop-blur-sm">
            <Search className="text-primary mx-auto mb-4 h-12 w-12" />
            <h1 className="mb-2 text-4xl font-extrabold tracking-tight">
              Page not found
            </h1>
            <p className="text-muted-foreground mb-6">
              We couldn&apos;t find the page you were looking for. It
              might have been moved, deleted, or never existed.
            </p>
            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <Link
                href="/"
                className={cn(
                  buttonVariants(),
                  "flex items-center gap-2"
                )}
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to home
              </Link>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "outline" })}
              >
                Contact support
              </Link>
            </div>
          </div>
        </div>
        <p className="text-muted-foreground text-sm">
          Error code: 404
        </p>
      </div>
    </div>
  );
}
