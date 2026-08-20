import { motion } from 'framer-motion';
import Button from '../common/Button';

export default function FinalCTA() {
  return (
    <section className="py-32 bg-black-cinema relative overflow-hidden">
      {/* Cinematic Background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black-cinema via-black-cinema/80 to-black-cinema z-10"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gold/10 blur-[120px] rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold tracking-[0.3em] uppercase text-xs mb-6"
        >
          Let's Work Together
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl text-accent-ivory leading-tight mb-6"
        >
          Have A Story <br />
          <span className="italic font-light text-accent-ivory/80">Worth Filming?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-accent-ivory/70 text-lg md:text-xl font-light mb-12 max-w-xl mx-auto"
        >
          Let's create something unforgettable.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Button to="/contact" variant="primary">Start Your Project</Button>
          <Button to="/contact" variant="outline">Contact Johnny</Button>
        </motion.div>
      </div>
    </section>
  );
}
