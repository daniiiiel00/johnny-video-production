import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Camera, Menu, Play, X } from "lucide-react";
import Button from "../common/Button";
import Logo from "../common/Logo";
import { navigation, siteConfig } from "../../data/site";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? "glass border-b border-gold/20 py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 md:px-8">
          <Link to="/" aria-label="Johnny Video Production home">
            <Logo compact={isScrolled} />
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            {navigation.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`group relative text-xs uppercase tracking-[0.2em] transition-colors ${
                  location.pathname === link.path ? "text-gold" : "text-accent-ivory hover:text-gold"
                }`}
              >
                {link.name}
                <span
                  className={`absolute -bottom-2 left-0 h-px bg-gold transition-all duration-300 ${
                    location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <Button to="/contact" variant="outline" className="ml-3">
              Book a Production
            </Button>
          </div>

          <button
            className="grid size-11 place-items-center text-accent-ivory transition hover:text-gold lg:hidden"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="size-7" />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[70] flex flex-col justify-center overflow-hidden bg-black-cinema/95 px-8 backdrop-blur-xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_78%_82%,rgba(104,29,46,0.22),transparent_30%)]" />
            <button
              className="absolute right-8 top-8 z-10 text-accent-ivory transition hover:text-gold"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="size-8" />
            </button>

            <div className="relative z-10 flex flex-col items-center gap-8 text-center">
              {navigation.map((link, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.12 + index * 0.07 }}
                  key={link.name}
                >
                  <Link to={link.path} onClick={() => setIsOpen(false)} className="font-heading text-5xl text-accent-ivory transition hover:text-gold">
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.55 }} className="mt-5">
                <Button to="/contact">Book a Production</Button>
              </motion.div>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-10 flex justify-center gap-5 text-accent-ivory/60">
              <a href={siteConfig.instagram || "#"} aria-label="Instagram" className="hover:text-gold">
                <Camera className="size-5" />
              </a>
              <a href={siteConfig.youtube || "#"} aria-label="YouTube" className="hover:text-gold">
                <Play className="size-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
