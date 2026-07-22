"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const links = [
  { label: "Inicio", href: "/" },
  { label: "Tienda", href: "/tienda" },
  { label: "Nosotros", href: "/nosotros" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-primary-light/50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-1.5 group">
            <span className="text-xl font-bold text-gradient tracking-tight">
              BEKKAGLAM
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-text/70 hover:text-primary rounded-full hover:bg-primary-light/50 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-light/50 transition-colors">
              <Heart className="w-5 h-5 text-text/60" />
            </button>
            <button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-primary-light/50 transition-colors">
              <ShoppingBag className="w-5 h-5 text-text/60" />
            </button>
            <Link href="/tienda" className="btn-primary text-sm px-5 py-2">
              Ver Tienda
            </Link>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-primary-light/50"
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-primary-light/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-text/70 font-medium rounded-lg hover:bg-primary-light/50"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 flex gap-2">
                <Link href="/tienda" className="btn-primary flex-1 justify-center text-sm">
                  Ver Tienda
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
