import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

// The same ultra-bold icons from the testimonials UI
const SPLASH_ICONS = [
  <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  <svg key="smile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>,
  <svg key="aperture" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>,
  <svg key="video-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  <svg key="camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M23 19a2 2 0 0 1-2-2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
];

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  
  // Create 30 particles for the ultra enhanced snowfall effect
  const [particles] = useState(() => Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 32 + 16, // 16px to 48px
    iconIndex: Math.floor(Math.random() * SPLASH_ICONS.length),
    x: Math.random() * 100, // Horizontal position
    y: Math.random() * -100 - 20, // Start above screen
    duration: Math.random() * 3 + 2, // Fast falling speed for short splash (2-5s)
    delay: Math.random() * 0.5,
    rotation: Math.random() > 0.5 ? 360 : -360,
    drift: Math.random() * 20 - 10,
  })));

  useEffect(() => {
    // Hide splash screen after 2.8 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black-cinema overflow-hidden"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gold/10 via-black-cinema to-black-cinema"></div>
          
          {/* --- Floating Snowfall Particles --- */}
          <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
            {particles.map((p) => (
              <motion.div
                key={p.id}
                className="absolute text-gold flex items-center justify-center mix-blend-screen drop-shadow-[0_0_15px_rgba(212,175,55,1)]"
                style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
                animate={{
                  y: ['0vh', '150vh'], // Fall fast
                  x: [`${p.x}%`, `${p.x + p.drift}%`, `${p.x - p.drift}%`], 
                  rotate: [0, p.rotation],
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  y: { duration: p.duration, ease: "linear", delay: p.delay },
                  x: { duration: p.duration * 0.8, ease: "easeInOut", delay: p.delay },
                  rotate: { duration: p.duration * 1.2, ease: "linear", delay: p.delay },
                  opacity: { duration: p.duration, ease: "linear", delay: p.delay }
                }}
              >
                {SPLASH_ICONS[p.iconIndex]}
              </motion.div>
            ))}
          </div>

          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
            animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center"
          >
            {/* Glowing backdrop for logo */}
            <motion.div 
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.2, 1] }} 
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-64 h-64 bg-gold rounded-full mix-blend-screen filter blur-[80px]"
            ></motion.div>
            
            <img 
              src="/src/assets/images/Logo/Logo.png" 
              alt="Johnny Video Production Logo" 
              className="w-48 md:w-64 relative z-10 drop-shadow-[0_0_20px_rgba(212,175,55,0.5)]"
            />
            
            {/* Loading Bar */}
            <div className="w-48 h-1 bg-white/10 rounded-full mt-10 overflow-hidden relative z-10">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 2, ease: "circOut" }}
                className="w-full h-full bg-gradient-to-r from-gold/50 via-gold to-gold-bright rounded-full shadow-[0_0_10px_rgba(212,175,55,0.8)]"
              ></motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
