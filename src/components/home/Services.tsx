import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { services } from '../../data/services';

export default function Services() {
  return (
    <section className="py-32 bg-black-rich border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-radial from-gold/5 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <SectionHeading 
          label="Our Expertise"
          title="From Vision To Final Frame."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 border border-white/5 hover:border-gold/30 bg-black-cinema transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-b from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <span className="text-4xl font-heading text-white/10 group-hover:text-gold/40 transition-colors duration-500 mb-6 block">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-2xl font-heading text-accent-ivory mb-4">{service.title}</h3>
                <p className="text-accent-ivory/60 font-sans font-light text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
