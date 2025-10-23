import Container from "./Container"
import { Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="mt-24 bg-brand-primary text-white">
      {/* Main footer content */}
      <Container className="py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-brand-accent" />
              <h3 className="text-lg font-bold">DAWN</h3>
            </div>
            <p className="text-white text-sm leading-relaxed">
              Building Zimbabwe's future with excellence, integrity, and innovation.
            </p>
            <div className="flex gap-3 pt-4">
              <a href="#" aria-label="LinkedIn" className="p-2 rounded-lg bg-white/10 hover:bg-brand-accent hover:text-brand-primary transition">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="p-2 rounded-lg bg-white/10 hover:bg-brand-accent hover:text-brand-primary transition">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="/services" className="hover:text-brand-accent transition">Construction</a></li>
              <li><a href="/services" className="hover:text-brand-accent transition">Project Mgmt</a></li>
              <li><a href="/services" className="hover:text-brand-accent transition">Brick Mfg</a></li>
              <li><a href="/fleet" className="hover:text-brand-accent transition">Fleet Hire</a></li>
            </ul>
          </div>

          {/* Company Pages */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-white">
              <li><a href="/" className="hover:text-brand-accent transition">Home</a></li>
              <li><a href="/projects" className="hover:text-brand-accent transition">Projects</a></li>
              <li><a href="/about" className="hover:text-brand-accent transition">About</a></li>
              <li><a href="/contact" className="hover:text-brand-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm sm:text-base">Get In Touch</h4>
            <div className="space-y-3 text-xs sm:text-sm text-white">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0 text-brand-accent" />
                <div>
                  <p>123 Construction Ave</p>
                  <p>Harare, Zimbabwe</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-brand-accent flex-shrink-0" />
                <a href="tel:+263" className="hover:text-brand-accent transition break-all">+263 (0) 242 123 456</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-brand-accent flex-shrink-0" />
                <a href="mailto:info@dawn.construction" className="hover:text-brand-accent transition break-all text-xs sm:text-sm">info@dawn.construction</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-white/70 space-y-3 sm:space-y-0">
            <p>© {new Date().getFullYear()} Dawn Construction Group. All rights reserved.</p>
            <div className="flex gap-4 sm:gap-6 text-xs text-white/70">
              <a href="#" className="hover:text-brand-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-brand-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-brand-accent transition">Cookies</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
