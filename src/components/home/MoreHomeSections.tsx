import { Camera, Play } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Button from "../common/Button";
import { blogPosts } from "../../data/blogPosts";
import { partners } from "../../data/partners";
import { processSteps, whyJohnny } from "../../data/services";
import { stats } from "../../data/site";
import { testimonials } from "../../data/testimonials";
import { useState, useRef } from 'react';
// Assuming SectionHeading, Reveal, and Star are imported here
// import { Star, ChevronLeft, ChevronRight } from 'lucide-react'; // Suggested for arrows

const TESTIMONIAL_ICONS = [
  // Heart (Happy client)
  <svg key="heart" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>,
  // Star (5-star rating)
  <svg key="star" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>,
  // Smile (Client satisfaction)
  <svg key="smile" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>,
  // Camera Aperture (Cinematography)
  <svg key="aperture" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>,
  // Video Camera
  <svg key="video-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M23 7l-7 5 7 5V7z" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
  // Camera
  <svg key="camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-full h-full"><path d="M23 19a2 2 0 0 1-2-2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
];

const btsImages = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1554048612-b6a482bc67e5?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=900&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?q=80&w=900&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=900&auto=format&fit=crop",
];

export function Marquee() {
  return (
    <section className="overflow-hidden border-y border-gold/10 bg-black-rich py-8">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="flex w-max gap-10 whitespace-nowrap font-heading text-4xl uppercase text-transparent [-webkit-text-stroke:1px_rgba(212,175,55,0.55)] md:text-6xl"
      >
        {Array.from({ length: 2 }).map((_, index) => (
          <span key={index}>WEDDINGS • COMMERCIAL • BABYSHOWR • EVENTS • MUSIC • STORYTELLING • BIRTHDAY •</span>
        ))}
      </motion.div>
    </section>
  );
}

export function WhyJohnny() {
  return (
    <section className="relative overflow-hidden bg-black-cinema py-28">
      <div className="absolute right-0 top-0 h-96 w-96 bg-accent-burgundy/20 blur-[120px]" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label="Why Johnny" title={"Every Frame\nHas Purpose."} />
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((item) => (
              <Reveal key={item.label} className="border border-gold/15 bg-black-rich p-6">
                <strong className="block font-heading text-5xl text-gold-bright">{item.value}</strong>
                <span className="mt-2 block text-sm text-accent-ivory/65">{item.label}</span>
              </Reveal>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {whyJohnny.map((item, index) => (
              <Reveal key={item} delay={index * 0.03} className="border border-white/8 bg-white/[0.03] px-5 py-4 text-accent-ivory/80">
                <span className="mr-3 text-gold">0{(index % 8) + 1}</span>{item}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="relative min-h-[520px] overflow-hidden bg-black-cinema py-32">
      <img
        src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1800&auto=format&fit=crop"
        alt="Film production camera in cinematic light"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black-cinema via-black-cinema/70 to-transparent" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <blockquote className="max-w-3xl font-heading text-5xl leading-tight text-accent-ivory md:text-7xl">
          “We don't simply record moments. We transform them into memories that move.”
        </blockquote>
        <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gold">Johnny Video Production</p>
      </div>
    </section>
  );
}

export function Testimonials() {
  const [particles] = useState(() => Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    size: Math.random() * 24 + 10, // 10px to 34px
    iconIndex: Math.floor(Math.random() * TESTIMONIAL_ICONS.length),
    x: Math.random() * 100, // Horizontal position
    delay: Math.random() * -30,
    duration: Math.random() * 20 + 15, // Falling speed
    drift: Math.random() * 20 - 10, // Horizontal drift
    rotation: Math.random() > 0.5 ? 360 : -360,
  })));
  const sliderRef = useRef<HTMLDivElement>(null);

  // Slider controls
  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };
  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="relative bg-black-rich py-32 overflow-hidden">
      
      {/* --- Floating Snowfall Particles --- */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-60">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute text-gold flex items-center justify-center mix-blend-screen drop-shadow-[0_0_15px_rgba(212,175,55,1)]"
            style={{ width: p.size, height: p.size, left: `${p.x}%`, top: '-10%' }}
            animate={{
              y: ['0vh', '120vh'], // Fall from top to bottom
              x: [`${p.x}%`, `${p.x + p.drift}%`, `${p.x - p.drift}%`], // Drift side to side
              rotate: [0, p.rotation], 
              opacity: [0, 0.9, 0.9, 0], // Fade in and out
            }}
            transition={{
              y: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay },
              x: { duration: p.duration * 0.8, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: p.duration * 1.2, repeat: Infinity, ease: "linear" },
              opacity: { duration: p.duration, repeat: Infinity, ease: "linear", delay: p.delay }
            }}
          >
            {TESTIMONIAL_ICONS[p.iconIndex]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <SectionHeading label="Testimonials" title={"Stories From\nOur Clients."} className="mb-0" />
        </div>

        {/* --- Side Slider Container --- */}
        <div 
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-8 pt-4"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} 
        >
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="snap-start shrink-0 w-[85vw] sm:w-[400px] lg:w-[450px]"
            >
              <div className="h-full rounded-2xl border border-gold/15 bg-gradient-to-b from-black-cinema/90 to-black-rich/90 backdrop-blur-md p-8 sm:p-10 flex flex-col hover:border-gold/50 hover:shadow-[0_10px_40px_rgba(212,175,55,0.15)] hover:-translate-y-2 transition-all duration-500 group">
                
                <div className="mb-8 flex gap-1.5">
                  {Array.from({ length: 5 }).map((_, index) => (
                     <svg key={index} className="size-6 fill-gold text-gold drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                  ))}
                </div>
                
                <p className="text-accent-ivory/90 leading-relaxed font-light flex-grow text-lg italic mb-10 relative">
                  <span className="absolute -left-4 -top-4 text-5xl text-gold/20 font-serif leading-none opacity-50">"</span>
                  {item.quote}
                  <span className="absolute -bottom-4 text-5xl text-gold/20 font-serif leading-none opacity-50 ml-2">"</span>
                </p>

                <div className="flex items-center gap-5 mt-auto pt-6 border-t border-white/10 group-hover:border-gold/30 transition-colors duration-500">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={`${item.name} testimonial`} 
                      loading="lazy" 
                      className="size-14 rounded-full object-cover border-2 border-gold/40 group-hover:border-gold transition-colors duration-500" 
                    />
                    <div className="absolute -bottom-1 -right-1 bg-gold rounded-full p-1 border-2 border-black-cinema">
                      <svg viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3" className="size-3"><path strokeLinecap="round" strokeLinejoin="round" d="M20 6L9 17l-5-5"></path></svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-accent-ivory text-xl font-heading tracking-wide group-hover:text-gold transition-colors">{item.name}</h3>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-accent-ivory/50 mt-1">{item.project}</p>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls (Centered Below Cards) */}
        <div className="flex justify-center gap-6 mt-8">
          <button 
            onClick={slideLeft} 
            className="size-14 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-black-rich hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
            aria-label="Previous testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button 
            onClick={slideRight} 
            className="size-14 rounded-full border border-gold/30 text-gold flex items-center justify-center hover:bg-gold hover:text-black-rich hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(212,175,55,0.1)]"
            aria-label="Next testimonials"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

      </div>
    </section>
  );
}

export function Process() {
  return (
    <section className="bg-black-cinema py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label="Process" title={"From Idea\nTo Screen."} />
        <div className="grid gap-5 md:grid-cols-5">
          {processSteps.map((step, index) => (
            <Reveal key={step.title} className="relative border-l border-gold/30 pl-5 md:border-l-0 md:border-t md:pt-7">
              <span className="mb-5 block text-xs uppercase tracking-[0.2em] text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mb-3 font-heading text-3xl text-accent-ivory">{step.title}</h3>
              <p className="text-sm leading-relaxed text-accent-ivory/60">{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Partners() {
  return (
    <section className="border-y border-white/5 bg-black-rich py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.3em] text-gold">Trusted By Amazing Clients</p>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
          {partners.map((partner) => (
            <div key={partner} className="grid h-24 place-items-center border border-white/8 text-center font-heading text-2xl text-accent-ivory/35 grayscale transition hover:border-gold/30 hover:text-gold hover:grayscale-0">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function BehindScenes() {
  return (
    <section className="bg-black-cinema py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading label="BTS" title={"Behind\nThe Lens."} className="mb-0" />
          <Button to="/about" variant="ghost">Meet Johnny →</Button>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
          {/* Portrait Image */}
          <Reveal className="md:row-span-2 overflow-hidden h-[400px] md:h-full">
            <img src={btsImages[0]} alt="Behind the scenes" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105 hover:opacity-100" />
          </Reveal>
          {/* Side Image 1 */}
          <Reveal className="overflow-hidden h-[250px] md:h-[300px]">
            <img src={btsImages[1]} alt="Behind the scenes" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105 hover:opacity-100" />
          </Reveal>
          {/* Side Image 2 */}
          <Reveal className="overflow-hidden h-[250px] md:h-[300px]">
            <img src={btsImages[2]} alt="Behind the scenes" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105 hover:opacity-100" />
          </Reveal>
          {/* Side Image 3 */}
          <Reveal className="md:col-span-2 overflow-hidden h-[250px] md:h-[300px]">
            <img src={btsImages[3]} alt="Behind the scenes" loading="lazy" className="h-full w-full object-cover opacity-80 transition duration-700 hover:scale-105 hover:opacity-100" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function LatestPosts() {
  return (
    <section className="bg-black-rich py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading label="Journal" title={"Stories,\nInsights & Films."} />
        <div className="grid gap-7 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Reveal key={post.slug} className="group bg-black-cinema">
              <img src={post.image} alt={post.title} loading="lazy" className="aspect-[4/3] w-full object-cover opacity-80 transition group-hover:opacity-100" />
              <div className="p-6">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">{post.category} • {post.date}</p>
                <h3 className="mb-3 font-heading text-3xl text-accent-ivory">{post.title}</h3>
                <p className="mb-5 text-sm text-accent-ivory/60">{post.excerpt}</p>
                <Button to={`/blog/${post.slug}`} variant="ghost" className="!px-0">Read Story →</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SocialFeed() {
  return (
    <section className="bg-black-cinema py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-10 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Follow The Journey on Instagram</p>
          <h2 className="mt-3 font-heading text-4xl text-accent-ivory">@johnny_video_production</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {btsImages.slice(0, 4).map((image) => (
            <a key={image} href="https://www.instagram.com/johnny_video_production/?hl=en" target="_blank" rel="noopener noreferrer" className="group relative aspect-square overflow-hidden">
              <img src={image} alt="Johnny Video Production social feed placeholder" loading="lazy" className="h-full w-full object-cover opacity-75 transition group-hover:scale-105" />
              <span className="absolute inset-0 grid place-items-center bg-gold/0 text-black-cinema transition group-hover:bg-gold/75"><Camera className="size-6" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function RotatingBadge() {
  return (
    <div className="grid place-items-center">
      <div className="relative grid size-36 place-items-center rounded-full border border-gold/35">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} className="absolute inset-3 rounded-full border border-dashed border-gold/25" />
        <div className="grid size-16 place-items-center rounded-full bg-gold text-black-cinema"><Play fill="currentColor" /></div>
      </div>
    </div>
  );
}
