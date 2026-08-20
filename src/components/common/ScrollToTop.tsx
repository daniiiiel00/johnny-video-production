import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // 1. Reset scroll position on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  // 2. Show/hide floating "back to top" button
  useEffect(() => {
    const toggleVisibility = () => {
      // Show the button when user scrolls down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          transition={{ duration: 0.4, type: "spring" }}
          className="fixed bottom-6 right-6 z-50 md:bottom-10 md:right-10"
        >
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-black-cinema/80 text-gold backdrop-blur-md shadow-[0_0_15px_rgba(212,175,55,0.25)] hover:bg-gold hover:text-black-rich hover:scale-110 active:scale-95 transition-all duration-300"
          >
            <ArrowUp className="size-6 drop-shadow-[0_0_8px_currentColor]" strokeWidth="2.5" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
