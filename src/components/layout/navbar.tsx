"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { COMPANY, NAVIGATION } from "@/lib/constants";
import { useScroll } from "@/hooks/use-scroll";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrolled } = useScroll();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray/40 shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-18 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/logo-icon.png"
              alt={`${COMPANY.name} logo`}
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
              priority
            />
            <span className="font-bold text-lg text-text">{COMPANY.name}</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 text-sm text-text/70 hover:text-text rounded-lg hover:bg-primary/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button size="sm" asChild>
              <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
                Contactar
              </a>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray/40 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {NAVIGATION.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-text/70 hover:text-text rounded-lg hover:bg-primary/5 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button className="w-full" asChild>
                  <a href={COMPANY.whatsappUrl} target="_blank" rel="noopener noreferrer">
                    Contactar
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
