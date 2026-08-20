import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section className="py-32 bg-black-cinema relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-gold tracking-[0.3em] uppercase text-xs mb-6"
            >
              THE ART OF STORYTELLING
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl font-heading text-accent-ivory leading-tight mb-8"
            >
              More Than Video.<br/>
              <span className="text-accent-ivory/60 italic font-light">We Create Emotion.</span>
            </motion.h2>
          </div>

          <div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-accent-ivory/80 font-sans font-light leading-relaxed mb-6"
            >
              Johnny Video Production creates cinematic films that capture emotion, atmosphere and authentic stories.
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-accent-ivory/80 font-sans font-light leading-relaxed"
            >
              From meaningful celebrations to ambitious commercial projects, every frame is created with intention.
            </motion.p>
          </div>
          
        </div>
      </div>
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-gold/5 blur-[150px] rounded-full pointer-events-none"></div>
    </section>
  );
}
