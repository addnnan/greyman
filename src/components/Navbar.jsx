import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X,MessageCircle } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="group flex items-center">
            <span className="text-white font-semibold text-xl tracking-[0.3em] uppercase transition-opacity group-hover:opacity-70">
              GREYMAN
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs tracking-[0.25em] uppercase text-white/60 hover:text-white transition-colors duration-300 relative after:absolute after:-bottom-2 after:left-0 after:h-[1px] after:w-full after:bg-white after:scale-x-0 after:origin-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-left"
              >
                {link.name}
              </a>
            ))}

            {/* CTA Button */}
            <a
              href="https://wa.me/97337915515?text=Hi"
              className="border border-white px-5 py-2 text-xs tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
            >
             <MessageCircle className="w-4 h-4 mr-2 inline-block" /> Whatsapp
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black"
          >
            <div className="flex flex-col h-full p-6">

              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="text-white"
                >
                  <X className="w-8 h-8" />
                </button>
              </div>

              {/* Links */}
              <nav className="flex flex-col items-center justify-center flex-1 gap-12">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="text-2xl tracking-[0.3em] uppercase text-white/80 hover:text-white transition-colors"
                  >
                    {link.name}
                  </motion.a>
                ))}

                {/* Mobile CTA */}
                <a
                  href="https://wa.me/97337915515?text=Hi"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 border border-white px-6 py-3 text-xs tracking-[0.3em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300"
                >
                 <MessageCircle className="w-4 h-4 mr-2 inline-block" /> Whatsapp
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}