import Link from "next/link";
import {
  Camera,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Camera className="text-primary h-6 w-6" />
              <span className="font-bold">SnapRise</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Showcasing professional work through beautiful galleries and
              connecting service providers with clients.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-muted-foreground hover:text-primary"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/professionals"
                  className="text-muted-foreground hover:text-primary"
                >
                  Professionals
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/contractors"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contractors
                </Link>
              </li>
              <li>
                <Link
                  href="/services/cleaners"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cleaners
                </Link>
              </li>
              <li>
                <Link
                  href="/services/landscapers"
                  className="text-muted-foreground hover:text-primary"
                >
                  Landscapers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/painters"
                  className="text-muted-foreground hover:text-primary"
                >
                  Painters
                </Link>
              </li>
              <li>
                <Link
                  href="/services/electricians"
                  className="text-muted-foreground hover:text-primary"
                >
                  Electricians
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-muted-foreground hover:text-primary"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-6">
          <p className="text-muted-foreground text-center text-xs">
            &copy; {new Date().getFullYear()} SnapRise. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
