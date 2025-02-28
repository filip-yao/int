import { Aperture, Globe, PenNib, Phone, ShareNetwork, X, List } from "@phosphor-icons/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white border-opacity-5 bg-background px-5 py-3 sm:px-8 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link href="/" className="shrink-0">
          <Image
            src="/Logo.png"
            alt="Kosmo Production logo"
            height={40}
            width={160}
            className="w-32 md:w-40"
          />
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex md:gap-8">
          <OriginalNavLink href="../Services/social-media" icon={ShareNetwork} label="Sociální sítě" />
          <OriginalNavLink href="../Services/web-development" icon={Globe} label="Webové stránky" />
          <OriginalNavLink href="../Services/photography" icon={Aperture} label="Fotografie" />
          <OriginalNavLink href="../Services/graphic" icon={PenNib} label="Grafika" />
          <OriginalNavLink href="/contacts" icon={Phone} label="Kontakty" />
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 md:hidden"
          aria-label="Otevřít menu"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-full bg-background/95 backdrop-blur-sm md:hidden"
          >
            <div className="flex h-full flex-col items-center gap-6 overflow-y-auto p-6 pt-10">
              <MobileNavLink href="../Services/social-media" icon={ShareNetwork} label="Sociální sítě" />
              <MobileNavLink href="../Services/web-development" icon={Globe} label="Webové stránky" />
              <MobileNavLink href="../Services/photography" icon={Aperture} label="Fotografie" />
              <MobileNavLink href="../Services/graphic" icon={PenNib} label="Grafika" />
              <MobileNavLink href="/contacts" icon={Phone} label="Kontakty" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

// Původní desktopové odkazy s vaší animací
function OriginalNavLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <Link
    href={href}
    className="group flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
  >
    <Icon size={20} weight="bold" className="mb-1 opacity-80" />
    <div className="relative">
      <span>{label}</span> {/* Opraven chybějící uzavírací } pro label */}
      <div className="absolute -bottom-1 h-[2px] w-0 rounded-full bg-white bg-opacity-50 transition-all duration-300 group-hover:w-full" />
    </div>
  </Link>
  );
}

// Mobilní odkazy s motion animacemi
function MobileNavLink({ href, icon: Icon, label }: { href: string; icon: any; label: string }) {
  return (
    <motion.div
      initial={{ x: 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="w-full max-w-xs"
    >
      <Link
        href={href}
        className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg opacity-80 transition-all hover:bg-white/10 hover:opacity-100"
      >
        <Icon size={24} weight="bold" />
        {label}
      </Link>
    </motion.div>
  );
}
