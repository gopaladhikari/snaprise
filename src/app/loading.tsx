import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="bg-background/80 fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="flex flex-col items-center gap-4">
        <Loader2 className="text-primary h-12 w-12 animate-spin" />
        <h2 className="text-xl font-semibold">Loading...</h2>
        <p className="text-muted-foreground">
          Please wait while we prepare your experience
        </p>
      </div>
    </div>
  );
}
