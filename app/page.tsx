"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  QrCode,
  Clock,
  CreditCard,
  Users,
  Star,
  ArrowRight,
  CheckCircle,
  Utensils,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    console.log("[v0] Attempting to scroll to section:", sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      console.log("[v0] Element found, scrolling to:", element);
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    } else {
      console.log("[v0] Element not found with ID:", sectionId);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              <Image
                src="favicon.ico"
                alt="App Logo"
                width={120}
                height={40}
                className="cursor-pointer"
              />
            </div>
            <span className="text-xl font-bold text-foreground">
              MesobFoods
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex">
              <Link href="https://mesobfoods.com">Try It Now</Link>
            </Button>
            <Button asChild size="sm" className="sm:hidden">
              <Link href="https://mesobfoods.com">Try Now</Link>
            </Button>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
            <nav className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-12 sm:py-16 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="text-center space-y-6 lg:space-y-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit mx-auto">
                Revolutionary Self-Order Experience
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-balance leading-tight">
                Scan, Order, Enjoy –
                <span className="text-primary"> No Waiters Needed</span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                Transform your restaurant experience with our seamless
                self-order system. Fast, efficient, and designed for the modern
                diner.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <Link href="https://mesobfoods.com">
                  Try It Now <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-transparent"
                onClick={() => scrollToSection("demo")}
              >
                Watch Demo
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>No app download required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Works on any device</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="demo" className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Live Demo
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              See MesobFoods in Action
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Watch how our intuitive interface revolutionizes the restaurant
              ordering experience.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-card border border-border rounded-2xl p-4 sm:p-8 shadow-2xl">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
                <video
                  className="w-full h-full object-cover rounded-lg"
                  controls
                  poster="/mesobfoods-restaurant-self-order-app-preview.jpg"
                  preload="metadata"
                >
                  <source src="/mesobfoods-demo-video.mp4" type="video/mp4" />
                  <source src="/mesobfoods-demo-video.webm" type="video/webm" />
                  {/* Fallback for browsers that don't support video */}
                  <img
                    src="/mesobfoods-restaurant-self-order-app-preview.jpg"
                    alt="MesobFoods Demo - QR Code Restaurant Ordering System"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <p className="text-muted-foreground">
                    Your browser doesn't support video playback.
                  </p>
                </video>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-medium">
                  Interactive Demo
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-muted-foreground text-sm sm:text-base">
                  Watch how customers can scan, browse, customize, and pay - all
                  without waiting for staff
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Key Features
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              Why Restaurants Choose MesobFoods
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Streamline operations, reduce costs, and enhance customer
              satisfaction with our comprehensive self-order solution.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <QrCode className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Instant QR Ordering</h3>
                <p className="text-muted-foreground">
                  Customers scan QR codes at their table and order instantly
                  without waiting for staff.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Lightning Fast Service
                </h3>
                <p className="text-muted-foreground">
                  Reduce wait times by 70% with automated ordering and kitchen
                  integration.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <CreditCard className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Seamless Payments</h3>
                <p className="text-muted-foreground">
                  Integrated payment processing with table management for
                  effortless transactions.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Reduce Overhead</h3>
                <p className="text-muted-foreground">
                  Cut staffing costs by 40% while improving order accuracy and
                  customer satisfaction.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 lg:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Simple Process
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              Three Steps to Perfect Dining
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Our streamlined process makes dining effortless for customers and
              profitable for restaurants.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <div className="text-center space-y-4 lg:space-y-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-xl lg:text-2xl font-bold text-primary-foreground">
                1
              </div>
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  Scan QR Code
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Simply scan the QR code at your table with any smartphone
                  camera. No app download required.
                </p>
              </div>
            </div>
            <div className="text-center space-y-4 lg:space-y-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-xl lg:text-2xl font-bold text-primary-foreground">
                2
              </div>
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  Browse & Order
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Explore the full menu with photos, customize your order, and
                  pay securely online.
                </p>
              </div>
            </div>
            <div className="text-center space-y-4 lg:space-y-6">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-primary rounded-full flex items-center justify-center mx-auto text-xl lg:text-2xl font-bold text-primary-foreground">
                3
              </div>
              <div className="space-y-3">
                <h3 className="text-xl lg:text-2xl font-semibold">
                  Enjoy Your Meal
                </h3>
                <p className="text-muted-foreground text-sm lg:text-base">
                  Sit back and relax while your order is prepared and delivered
                  directly to your table.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-12 lg:mb-16">
            <Badge variant="secondary" className="w-fit mx-auto">
              Customer Reviews
            </Badge>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              Loved by Diners & Restaurant Owners
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "MesobFoods transformed our restaurant operations. We've
                  reduced wait times and increased table turnover by 50%. Our
                  customers love the convenience!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">SM</span>
                  </div>
                  <div>
                    <p className="font-medium">Sarah Martinez</p>
                    <p className="text-sm text-muted-foreground">
                      Owner, Bella Vista Restaurant
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "As a customer, I love how easy it is to order. No more
                  waiting for servers, and I can customize everything exactly
                  how I want it."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">MJ</span>
                  </div>
                  <div>
                    <p className="font-medium">Michael Johnson</p>
                    <p className="text-sm text-muted-foreground">
                      Regular Customer
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  "The analytics and insights we get from MesobFoods help us
                  optimize our menu and improve profitability. It's a
                  game-changer."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-sm font-medium text-primary">DL</span>
                  </div>
                  <div>
                    <p className="font-medium">David Lee</p>
                    <p className="text-sm text-muted-foreground">
                      Manager, Urban Eats
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-lg sm:text-xl text-primary-foreground/80 text-pretty max-w-2xl mx-auto">
              Join hundreds of restaurants already using MesobFoods to
              streamline operations and delight customers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg px-8"
            >
              <Link href="https://mesobfoods.com">
                Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              onClick={() => scrollToSection("contact")}
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center space-y-4 mb-12 lg:mb-16">
              <Badge variant="secondary" className="w-fit mx-auto">
                Get In Touch
              </Badge>
              <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-balance">
                Have Questions? We're Here to Help
              </h2>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="space-y-6 lg:space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Contact Information
                  </h3>
                  <div className="space-y-3 text-muted-foreground">
                    <p className="flex items-center space-x-2">
                      <span>📧</span>
                      <span>support@mesobfoods.com</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>📞</span>
                      <span>+251 961 063 629</span>
                    </p>
                    <p className="flex items-center space-x-2">
                      <span>📍</span>
                      <span>Addis Ababa, Ethiopia</span>
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6 lg:p-8">
                  <form
                    className="space-y-4 lg:space-y-6"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      const form = e.currentTarget as HTMLFormElement;
                      const firstName = (
                        form.querySelector<HTMLInputElement>(
                          '[name="firstName"]'
                        )?.value || ""
                      ).trim();
                      const lastName = (
                        form.querySelector<HTMLInputElement>(
                          '[name="lastName"]'
                        )?.value || ""
                      ).trim();
                      const email = (
                        form.querySelector<HTMLInputElement>('[name="email"]')
                          ?.value || ""
                      ).trim();
                      const restaurant = (
                        form.querySelector<HTMLInputElement>(
                          '[name="restaurant"]'
                        )?.value || ""
                      ).trim();
                      const message = (
                        form.querySelector<HTMLTextAreaElement>(
                          '[name="message"]'
                        )?.value || ""
                      ).trim();

                      try {
                        const response = await fetch("/api/contact", {
                          method: "POST",
                          headers: {
                            "Content-Type": "application/json",
                          },
                          body: JSON.stringify({
                            firstName,
                            lastName,
                            email,
                            restaurant,
                            message,
                          }),
                        });

                        if (response.ok) {
                          toast.success("Message sent successfully!");
                          form.reset();
                        } else {
                          toast.error("Failed to send message. Try again.");
                        }
                      } catch (error) {
                        console.error("Error sending message:", error);
                        toast.error("Something went wrong. Please try again.");
                      }
                    }}
                  >
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          First Name
                        </label>
                        <input
                          name="firstName"
                          type="text"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="John"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          Last Name
                        </label>
                        <input
                          name="lastName"
                          type="text"
                          className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                          placeholder="Doe"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Restaurant Name
                      </label>
                      <input
                        name="restaurant"
                        type="text"
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Your Restaurant"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        className="w-full px-4 py-2 border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Tell us about your restaurant and how we can help..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border/40 py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Utensils className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">MesobFoods</span>
              </div>
              <p className="text-muted-foreground text-sm lg:text-base">
                Revolutionizing restaurant dining with seamless self-order
                technology.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Twitter
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  LinkedIn
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground text-sm"
                >
                  Instagram
                </Link>
              </div>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4">Product</h3>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("features")}
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Features
                </button>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Pricing
                </Link>
                <button
                  onClick={() => scrollToSection("demo")}
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Demo
                </button>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  API
                </Link>
              </div>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4">Company</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  About
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Blog
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Careers
                </Link>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Contact
                </button>
              </div>
            </div>
            <div className="space-y-4 sm:col-span-2 lg:col-span-1">
              <h3 className="font-semibold mb-4">Legal</h3>
              <div className="space-y-2">
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  Cookie Policy
                </Link>
                <Link
                  href="#"
                  className="block text-muted-foreground hover:text-foreground"
                >
                  GDPR
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-border/40 mt-6 lg:mt-8 pt-6 lg:pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 MesobFoods. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
