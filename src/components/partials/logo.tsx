import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";

export function Logo({ className }: Partial<ImageProps>) {
  return (
    <figure className="flex items-center gap-1">
      <Image
        className={cn("object-contain", className)}
        src="/logo-128.png"
        alt="SnapRise"
        width={50}
        height={50}
      />
      <figcaption className="text-xl font-bold">SnapRise</figcaption>
    </figure>
  );
}
