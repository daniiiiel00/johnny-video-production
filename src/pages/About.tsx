import { Camera, Aperture, Sun, Mic, Activity, Film, Video } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import { capabilities, timeline, values } from "../data/site";
import { useSeo } from "../hooks/useSeo";
const getCapabilityIcon = (name: string, isBg: boolean = false) => {
  const sizeClass = isBg ? "size-40" : "size-7";
  const glowClass = isBg ? "" : "drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]";
  const className = `${sizeClass} text-gold ${glowClass}`;
  
  const str = name.toLowerCase();
  if (str.includes("camera")) return <Camera className={className} />;
  if (str.includes("lens")) return <Aperture className={className} />;
  if (str.includes("light")) return <Sun className={className} />;
  if (str.includes("audio")) return <Mic className={className} />;
  if (str.includes("stabiliz")) return <Activity className={className} />;
  if (str.includes("post")) return <Film className={className} />;
  return <Video className={className} />;
};

export default function About() {
  useSeo({
    title: "About Johnny Video Production | Story First Cinematic Filmmaking",
    description:
      "Meet Johnny Video Production, a premium videography studio built around emotion, cinematic imagery, creative direction and story-first production.",
    path: "/about",
  });

  return (
    <div className="bg-black-cinema">
      <section className="relative min-h-[72vh] overflow-hidden pt-32">
        <img
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1800&auto=format&fit=crop"
          alt="Filmmaker holding cinema camera"
          className="absolute inset-0 h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/70 to-black-cinema/20" />
        <div className="relative mx-auto flex min-h-[62vh] max-w-7xl items-end px-5 pb-20 md:px-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">About the Studio</p>
            <h1 className="font-heading text-7xl leading-none text-accent-ivory md:text-9xl">
              Behind
              <br />
              The Camera.
            </h1>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:px-8">
          <Reveal>
            <img
              src="https://images.unsplash.com/photo-1580707221190-bd94d9087b7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmlkZW8lMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D"
              alt="Johnny Video Production filmmaking workspace"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </Reveal>
          <Reveal className="self-center">
            <SectionHeading label="Johnny Story" title={"Story First.\nAlways."} />
            <div className="space-y-6 text-lg leading-relaxed text-accent-ivory/68">
              <p>Johnny Video Production was built from a passion for storytelling, emotion and cinematic imagery.</p>
              <p>Every project begins with listening: understanding the people, story and purpose behind the camera before a single frame is captured.</p>
              <p>From meaningful celebrations to ambitious commercial projects, every production is shaped with intention, atmosphere and craft.</p>
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              {values.map((value) => (
                <span key={value} className="border border-gold/20 px-4 py-2 text-sm text-accent-ivory/75">
                  {value}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-white/5 bg-black-rich py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label="Experience" title={"A Growing\nCinematic Journey."} />
          <div className="grid gap-5 md:grid-cols-5">
            {timeline.map((item) => (
              <Reveal key={item.year} className="border-l border-gold/30 pl-5 md:border-l-0 md:border-t md:pt-6">
                <strong className="font-heading text-4xl text-gold-bright">{item.year}</strong>
                <p className="mt-3 text-accent-ivory/70">{item.title}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black-cinema overflow-hidden border-t border-white/5">
        {/* Floating Background Orbs */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
            <motion.div 
               animate={{ y: [0, -50, 0], x: [0, 30, 0] }} 
               transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold rounded-full mix-blend-screen filter blur-[100px]"
            />
            <motion.div 
               animate={{ y: [0, 50, 0], x: [0, -40, 0] }} 
               transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
               className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold rounded-full mix-blend-screen filter blur-[120px]"
            />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
          <SectionHeading label="Capabilities" title={"Production\nReady."} />
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {capabilities.map((capability) => (
              <Reveal 
                key={capability} 
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black-rich/80 backdrop-blur-md p-8 hover:border-gold/50 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 min-h-[220px] flex flex-col justify-between"
              >
                {/* Background ambient glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
                {/* Large translucent icon floating in background */}
                <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:opacity-20 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-700 pointer-events-none text-gold">
                  {getCapabilityIcon(capability, true)}
                </div>

                <div className="relative z-10 flex flex-col h-full justify-between">
                   <div className="p-3 bg-black-cinema border border-gold/20 rounded-xl w-fit group-hover:scale-110 group-hover:border-gold/50 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] mb-8">
                     {getCapabilityIcon(capability, false)}
                   </div>
                   
                   <div>
                     <h3 className="font-heading text-2xl text-accent-ivory group-hover:text-gold transition-colors duration-300">
                       {capability}
                     </h3>
                     {/* Decorative line */}
                     <div className="w-10 h-[2px] bg-gold/30 mt-5 group-hover:w-full transition-all duration-700" />
                   </div>
                </div>
              </Reveal>
            ))}
          </div>
          
          <div className="mt-16 flex justify-center">
  <Button to="/contact" variant="primary">Book a Production</Button>
</div>
        </div>
      </section>
    </div>
  );
}
