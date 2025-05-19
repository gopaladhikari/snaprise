import Link from "next/link";
import Image from "next/image";
import {
  Camera,
  CheckCircle,
  Search,
  Star,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="relative">
          <div className="bg-black" />
          <div className="relative h-[610px] w-full">
            <Image
              src="/hero-image.jpg"
              alt="Professional service showcase"
              fill
              className="object-cover"
              priority
            />
            {/* Dark overlay */}
            <div className="pointer-events-none absolute inset-0 z-10 bg-black/60" />
          </div>
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container">
              <div className="max-w-2xl space-y-6">
                <h1 className="text-white">
                  Showcase Your Professional Work
                </h1>
                <p className="text-muted text-lg">
                  Connect with clients through stunning visual
                  portfolios. Perfect for contractors, cleaners,
                  landscapers, and more.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button size="lg" asChild>
                    <Link href="/register">Get Started</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/gallery">Browse Gallery</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Why Choose SnapRise
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                The perfect platform for service professionals to
                showcase their work
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="bg-card flex flex-col items-center rounded-lg border p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Camera className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Beautiful Galleries
                </h3>
                <p className="text-muted-foreground mt-2">
                  Create stunning visual portfolios that showcase your
                  best work to potential clients.
                </p>
              </div>
              <div className="bg-card flex flex-col items-center rounded-lg border p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Client Connections
                </h3>
                <p className="text-muted-foreground mt-2">
                  Connect directly with potential clients who are
                  looking for your specific services.
                </p>
              </div>
              <div className="bg-card flex flex-col items-center rounded-lg border p-6 text-center">
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Search className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Enhanced Visibility
                </h3>
                <p className="text-muted-foreground mt-2">
                  Get discovered by clients searching for services in
                  your area with our optimized directory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Services We Support
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                SnapRise is perfect for a wide range of service
                professionals
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Contractors",
                  description:
                    "Showcase your construction and renovation projects",
                },
                {
                  title: "Cleaners",
                  description:
                    "Display before and after transformations of your cleaning services",
                },
                {
                  title: "Landscapers",
                  description:
                    "Highlight your garden and outdoor space designs",
                },
                {
                  title: "Painters",
                  description:
                    "Present your painting and decorating work",
                },
                {
                  title: "Electricians",
                  description:
                    "Demonstrate your electrical installation projects",
                },
                {
                  title: "Plumbers",
                  description:
                    "Show off your plumbing and bathroom renovation work",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-card flex rounded-lg border p-6"
                >
                  <CheckCircle className="text-primary mt-1 mr-4 h-6 w-6 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-bold">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                How It Works
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Get started with SnapRise in just a few simple steps
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="relative flex flex-col items-center p-6 text-center">
                <div className="bg-primary text-primary-foreground absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                  1
                </div>
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Users className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Create Your Account
                </h3>
                <p className="text-muted-foreground mt-2">
                  Sign up for a free account and complete your
                  professional profile with your services and contact
                  information.
                </p>
              </div>
              <div className="relative flex flex-col items-center p-6 text-center">
                <div className="bg-primary text-primary-foreground absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                  2
                </div>
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Camera className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Upload Your Work
                </h3>
                <p className="text-muted-foreground mt-2">
                  Create galleries and upload high-quality photos of
                  your best projects to showcase your skills and
                  expertise.
                </p>
              </div>
              <div className="relative flex flex-col items-center p-6 text-center">
                <div className="bg-primary text-primary-foreground absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold">
                  3
                </div>
                <div className="bg-primary/10 mb-4 rounded-full p-4">
                  <Star className="text-primary h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">
                  Connect with Clients
                </h3>
                <p className="text-muted-foreground mt-2">
                  Get discovered by potential clients, receive
                  inquiries, and grow your business through our
                  platform.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted py-16 md:py-24">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                What Our Users Say
              </h2>
              <p className="text-muted-foreground mt-4 text-lg">
                Hear from professionals who have grown their business
                with SnapRise
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-card rounded-lg border p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Testimonial avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Sarah Johnson</h4>
                    <p className="text-muted-foreground text-sm">
                      Landscaper
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  &quot;Since joining SnapRise, I&apos;ve seen a 40%
                  increase in client inquiries. The platform makes it
                  so easy to showcase my landscaping projects!&quot;
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Testimonial avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Michael Rodriguez</h4>
                    <p className="text-muted-foreground text-sm">
                      Contractor
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  &quot;The photo galleries on SnapRise have
                  transformed how I present my renovation work.
                  Clients can now see my quality craftsmanship before
                  they even call.&quot;
                </p>
              </div>
              <div className="bg-card rounded-lg border p-6">
                <div className="mb-4 flex items-center">
                  <div className="mr-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Testimonial avatar"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">Emily Chen</h4>
                    <p className="text-muted-foreground text-sm">
                      Cleaning Service
                    </p>
                  </div>
                </div>
                <div className="mb-2 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  &quot;As a cleaning professional, before and after
                  photos are everything. SnapRise gives me the perfect
                  platform to showcase my transformations.&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="bg-primary rounded-xl p-8 md:p-12">
              <div className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
                <div className="space-y-4">
                  <h2 className="text-primary-foreground text-3xl font-bold tracking-tight sm:text-4xl">
                    Ready to Showcase Your Work?
                  </h2>
                  <p className="text-primary-foreground/90 text-lg">
                    Join thousands of professionals who are growing
                    their business through stunning visual portfolios.
                  </p>
                  <div className="flex flex-col gap-4 sm:flex-row">
                    <Button size="lg" variant="secondary" asChild>
                      <Link href="/register">Get Started</Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
                      asChild
                    >
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative h-64 w-full max-w-sm">
                    <Image
                      src="/placeholder.svg?height=256&width=384"
                      alt="Professional at work"
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
