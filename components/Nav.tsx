'use client'
import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import Logo from "./Logo"
import { cn } from "@lib/cn"

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/fleet", label: "Fleet Hire" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 inset-x-0 z-50 transition-all duration-300",
      scrolled 
        ? "backdrop-blur-md bg-white/80 border-b border-white/20 shadow-card" 
        : "bg-white/50 backdrop-blur-sm"
    )}>
      <nav className="mx-auto max-w-7xl px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex-shrink-0 hover:opacity-80 transition">
          <Logo className="text-brand-primary text-sm md:text-base" />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center flex-1 justify-center">
          {links.map(l => (
            <Link 
              key={l.href} 
              href={l.href} 
              className={cn(
                "text-sm font-medium transition-colors duration-200",
                "text-brand-primary/70 hover:text-brand-accent"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
        
        <Link 
          href="/contact" 
          className="hidden md:inline-flex items-center btn-primary text-xs md:text-sm"
        >
          Request Quote
        </Link>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-brand-primary hover:bg-brand-primary/10 rounded-lg transition"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 backdrop-blur-md bg-white/95 border-b border-white/20 animate-slide-down">
          <nav className="flex flex-col p-6 space-y-4">
            {links.map(l => (
              <Link 
                key={l.href} 
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-brand-primary/70 hover:text-brand-accent font-medium transition"
              >
                {l.label}
              </Link>
            ))}
            <Link 
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="btn-primary text-sm inline-flex justify-center mt-2"
            >
              Request Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
