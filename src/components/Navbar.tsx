"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/features" },
    { 
      name: "Documentation", 
      href: "#", 
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Documentation will be available soon!");
      }
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2 group">
              <Image src="/logo-ams.svg" alt="ClassPass Logo" width={28} height={28} className="object-contain transition-transform group-hover:scale-105" />
              <span className="text-xl font-bold tracking-tight">ClassPass</span>
            </Link>
          </div>
 
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={link.onClick}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === link.href ? "text-foreground" : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>
 
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" disabled className="cursor-not-allowed opacity-50">
              Sign In
            </Button>
            <Button disabled className="cursor-not-allowed opacity-50">
              Get Started
            </Button>
          </div>
 
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t bg-background"
          >
            <div className="flex flex-col px-4 py-4 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "block text-base font-medium transition-colors hover:text-primary",
                    pathname === link.href ? "text-foreground" : "text-muted-foreground"
                  )}
                  onClick={(e) => {
                    if (link.onClick) link.onClick(e);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t">
                <Button variant="outline" disabled className="w-full cursor-not-allowed opacity-50">
                  Sign In
                </Button>
                <Button disabled className="w-full cursor-not-allowed opacity-50">
                  Get Started
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
