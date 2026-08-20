import { motion } from "framer-motion";
import { Play, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import type { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  onOpen?: (project: Project) => void;
  buttonText?: string;
  redirectTo?: string;
}

export default function ProjectCard({ project, index = 0, onOpen, buttonText = "Watch Project", redirectTo }: ProjectCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (redirectTo) {
      navigate(redirectTo);
    } else {
      onOpen?.(project);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, delay: index * 0.06 }}
      className="group relative cursor-pointer overflow-hidden bg-black-rich rounded-xl"
      onClick={handleClick}
    >
      <div className="relative aspect-[4/5] overflow-hidden md:aspect-[3/4]">
        <img
          src={project.thumbnail}
          alt={`${project.title} ${project.category.toLowerCase()} film by Johnny Video Production`}
          loading="lazy"
          className="h-full w-full object-cover opacity-80 transition duration-1000 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/40 to-transparent opacity-75 transition duration-500 group-hover:opacity-90" />
        <div className="pointer-events-none absolute inset-4 border border-gold/0 transition duration-500 group-hover:border-gold/40" />

        <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 md:p-8">
          <div className="translate-y-4 transition duration-500 group-hover:translate-y-0">
            <div className="mb-4 flex items-end justify-between gap-4">
              <span className="text-xs uppercase tracking-[0.2em] text-gold">{project.category}</span>
              <span className="text-xs text-accent-ivory/55">{project.year}</span>
            </div>
            <h3 className="font-heading text-3xl leading-none text-accent-ivory md:text-4xl">
              {project.title}
            </h3>
            <div className="mt-5 flex translate-y-full items-center gap-3 text-xs uppercase tracking-[0.2em] text-accent-ivory opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
              <span className="grid size-10 place-items-center rounded-full bg-gold text-black-cinema">
                {redirectTo ? <ArrowRight className="size-4" /> : <Play className="size-4" fill="currentColor" />}
              </span>
              {buttonText}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
