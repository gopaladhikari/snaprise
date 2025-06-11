"use client";

import Link from "next/link";
import { useState } from "react";
import { Loader2, Menu, X } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Logo } from "../logo";
import { UserNav } from "./user-nav";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { status } = useAuth();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        <div className="ml-8 flex w-full items-center justify-center gap-4">
          {status === "loading" && (
            <div className="border-primary ml-auto size-8 animate-spin rounded-full border-2">
              <Loader2 className="size-2 animate-spin" />
            </div>
          )}

          {status === "authenticated" && (
            <UserNav className="ml-auto" />
          )}

          {status === "unauthenticated" && (
            <div className="ml-auto hidden items-center gap-4 md:flex">
              <Link
                href="/login"
                className={cn(
                  buttonVariants({ variant: "secondary" })
                )}
              >
                Login
              </Link>
              <Link href="/register" className={cn(buttonVariants())}>
                Register
              </Link>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
