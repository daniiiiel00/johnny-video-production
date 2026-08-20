import SectionHeading from '../common/SectionHeading';
import ProjectCard from '../common/ProjectCard';
import Button from '../common/Button';
import { projects } from '../../data/projects';
import { motion } from 'framer-motion';

export default function FeaturedProjects() {
  return (
    <section className="py-32 bg-black-cinema relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <SectionHeading 
            label="Selected Work"
            title="Selected Productions."
            className="mb-0"
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button variant="ghost" to="/gallery" className="!px-0 flex items-center gap-2 group text-xs">
              Explore Full Gallery 
              <span className="block transform group-hover:translate-x-2 transition-transform">→</span>
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.id} className={index % 2 !== 0 ? 'md:mt-24' : ''}>
              <ProjectCard project={project} index={index} buttonText="View Full Gallery" redirectTo="/gallery" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
