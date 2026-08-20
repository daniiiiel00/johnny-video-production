import { useMemo, useState } from "react";
import ProjectCard from "../components/common/ProjectCard";
import SectionHeading from "../components/common/SectionHeading";
import VideoModal from "../components/common/VideoModal";
import { projectCategories, projects, type Project } from "../data/projects";
import { useSeo } from "../hooks/useSeo";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useSeo({
    title: "Gallery | Johnny Video Production Cinematic Film Portfolio",
    description:
      "Explore Johnny Video Production wedding films, commercial videos, event coverage, music videos, fashion films, corporate stories and documentaries.",
    path: "/gallery",
  });

  const visibleProjects = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-black-cinema">
      <section className="relative min-h-[68vh] overflow-hidden pt-32">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1800&auto=format&fit=crop"
          alt="Professional cinema camera filming a gallery project"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/70 to-black-cinema/20" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-7xl items-end px-5 pb-20 md:px-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">Portfolio</p>
            <h1 className="font-heading text-7xl leading-none text-accent-ivory md:text-9xl">
              Stories
              <br />
              In Motion.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label="Selected Work" title={"Films With\nFeeling."} />
          <div className="mb-12 flex flex-wrap gap-3">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`min-h-11 border px-5 text-xs uppercase tracking-[0.18em] transition ${
                  activeCategory === category
                    ? "border-gold bg-gold text-black-cinema"
                    : "border-white/10 text-accent-ivory/70 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <div key={project.id} className={index % 3 === 1 ? "lg:mt-14" : ""}>
                <ProjectCard project={project} index={index} onOpen={setSelectedProject} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={Boolean(selectedProject)}
        title={selectedProject?.title ?? ""}
        video={selectedProject?.video ?? ""}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
