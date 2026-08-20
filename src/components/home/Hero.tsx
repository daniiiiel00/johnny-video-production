import { motion } from 'framer-motion';
import { useState } from 'react';
import Button from '../common/Button';

// Array of cinematic SVG paths to randomize
const CINEMA_ICONS = [
  // Video Camera
  <svg key="video-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  // Clapperboard
  <svg key="clapperboard" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M20 21H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z"></path><line x1="2" y1="9" x2="22" y2="9"></line><path d="M4 3l7 6"></path><path d="M11 3l7 6"></path></svg>,
  // Film Strip
  <svg key="film-strip" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line></svg>,
  // Play Button
  <svg key="play-button" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>,
  // Camera (Photo)
  <svg key="camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full"><path d="M23 19a2 2 0 0 1-2-2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
];

export default function Hero() {
  const [particles] = useState(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 32 + 16, 
    isGold: Math.random() > 0.7, 
    isBlurred: Math.random() > 0.5,
    iconIndex: Math.floor(Math.random() * CINEMA_ICONS.length),
    rotation: Math.random() > 0.5 ? 360 : -360,
    x: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -30,
    drift: Math.random() * 20 - 10,
  })));

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black-cinema">
      
      {/* Background Video/Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black-cinema/70 z-10"></div>
        {/* Subtle Gold Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/20 via-transparent to-black-cinema z-10 mix-blend-overlay"></div>
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfJFT3_o1hJZFqHhAagJSJGJxZ3zvbZBhBbE9QiWi-Q&s=10" 
          alt="Cinematic production" 
          className="w-full h-full object-cover opacity-60"
        />
      </div>

      {/* --- ENHANCED: Floating Cinematic Icons --- */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className={`absolute flex items-center justify-center ${
              p.isGold ? 'text-gold/30' : 'text-white/10'
            } ${p.isBlurred ? 'blur-[3px]' : 'blur-[0px]'}`}
            style={{
              width: p.size,
              height: p.size,
              left: `${p.x}%`,
              top: '-10%', 
            }}
            animate={{
              y: ['0vh', '110vh'], 
              x: [`${p.x}%`, `${p.x + p.drift}%`, `${p.x - p.drift}%`], 
              rotate: [0, p.rotation], // Gentle spinning
              opacity: [0, 1, 1, 0], 
            }}
            transition={{
              y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
              x: { duration: p.duration * 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: p.duration * 1.2, repeat: Infinity, ease: "linear" },
              opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }
            }}
          >
            {CINEMA_ICONS[p.iconIndex]}
          </motion.div>
        ))}
      </div>
     
      {/* Main Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-24">
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.4em] uppercase text-xs md:text-sm mb-6"
        >
          JOHNNY VIDEO PRODUCTION
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl lg:text-9xl font-heading text-accent-ivory leading-[1.1] mb-8 drop-shadow-2xl"
        >
          Beyond comparison <br/>
          <span className="text-gradient-gold"> worthy of choice!</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-accent-ivory/80 text-lg md:text-xl font-sans max-w-2xl mx-auto mb-12 font-light"
        >
          Crafting timeless films, unforgettable moments and cinematic experiences through visual storytelling.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6"
        >
          <Button to="/gallery" variant="primary">View Our Work</Button>
          <Button to="/contact" variant="outline">Book a Production</Button>
        </motion.div>
      </div>
    </section>
  );
}