"use client";

import Link from "next/link";
import { useContext, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "../logo";
import { UserContext } from "@/context/user-context";
import { UserNav } from "./user-nav";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { isAuthenticated } = useContext(UserContext);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Logo />
          </Link>
        </div>

        {/* Auth Buttons or User Menu */}
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <UserNav />
          ) : (
            <div className="hidden items-center gap-4 md:flex">
              <Button variant="ghost" asChild>
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Register</Link>
              </Button>
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
