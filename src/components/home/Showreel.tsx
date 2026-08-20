import { motion } from 'framer-motion';
// import { Play } from 'lucide-react';
import bgVideo from '../../assets/videos/vedio-1.mp4';

export default function Showreel() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black-cinema group cursor-pointer">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black-cinema/40 group-hover:bg-black-cinema/20 transition-colors duration-700 z-10"></div>
        <video 
          src={bgVideo} 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative flex items-center justify-center"
        >
          {/* Rotating Text */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full border border-gold/20 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:border-gold/50 transition-all duration-500"
          >
             <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="text-[9px] uppercase tracking-widest fill-gold font-sans font-semibold">
                <textPath href="#circlePath" startOffset="0%">
                  • JOHNNY VIDEO PRODUCTION •  
                </textPath>
              </text>
            </svg>
          </motion.div>

          {/* Play Button */}
          <div className="w-20 h-20 md:w-28 md:h-28 rounded-full bg-gold/10 backdrop-blur-md border border-gold/30 flex items-center justify-center group-hover:bg-gold transition-colors duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] group-hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]">
            <p className="text-4xl font-bold text-gold group-hover:text-black-cinema transition-colors duration-500">J</p>
            {/* <Play size={32} className="text-gold group-hover:text-black-cinema ml-2 transition-colors duration-500" /> */}
          </div>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-12 font-heading text-4xl md:text-5xl text-accent-ivory text-center"
        >
          Watch Our <br/><span className="text-gradient-gold">Showreel.</span>
        </motion.h2>
      </div>
    </section>
  );
}
