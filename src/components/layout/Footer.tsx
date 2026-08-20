import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Camera, Film, Aperture, Video, Share2, Play, Send } from "lucide-react";
import Logo from "../common/Logo";
import { navigation, siteConfig } from "../../data/site";

const footerServices = ["Wedding Films", "Commercial", "Events", "Music Videos", "Corporate Films", "Post Production"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/10 bg-black-rich pt-24 pb-12">
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_15%_20%,rgba(212,175,55,0.1),transparent_26%),radial-gradient(circle_at_90%_20%,rgba(69,36,63,0.22),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-20 text-center">
          <div className="mb-8 flex justify-center">
            <Logo />
          </div>
          <h2 className="mb-6 font-heading text-5xl tracking-tight text-accent-ivory md:text-7xl">
            Stories Live Forever.
          </h2>
          <p className="mx-auto max-w-xl text-accent-ivory/60">Crafting cinematic memories and premium visuals.</p>
        </div>

        <div className="mb-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Navigation Section */}
          <div className="group relative rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
            <motion.div 
              animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none"
            >
              <Aperture size={120} strokeWidth={1} />
            </motion.div>
            
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold relative z-10 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold/50"></span> Navigation
            </h3>
            <ul className="space-y-4 text-sm text-accent-ivory/80 relative z-10">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="transition hover:text-gold hover:translate-x-2 inline-block transform duration-300">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="group relative rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
            <motion.div 
              animate={{ y: [0, 15, 0], rotate: [0, -10, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
              className="absolute -left-8 -bottom-4 text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none"
            >
              <Film size={120} strokeWidth={1} />
            </motion.div>
            
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold relative z-10 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold/50"></span> Services
            </h3>
            <ul className="space-y-4 text-sm text-accent-ivory/80 relative z-10">
              {footerServices.map((service) => (
                <li key={service}>
                  <Link to="/gallery" className="transition hover:text-gold hover:translate-x-2 inline-block transform duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Section */}
          <div className="group relative rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
             <motion.div 
              animate={{ y: [0, -15, 0], rotate: [0, 15, -10, 0] }} 
              transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
              className="absolute -right-8 -bottom-8 text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none"
            >
              <Camera size={140} strokeWidth={1} />
            </motion.div>
            
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold relative z-10 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold/50"></span> Social
            </h3>
            <ul className="space-y-4 text-sm text-accent-ivory/80 relative z-10">
              <li><a href={siteConfig.instagram || "#"} className="flex items-center gap-3 transition hover:text-gold hover:translate-x-2 transform duration-300"><Camera size={16} /> Instagram</a></li>
              <li><a href={siteConfig.facebook || "#"} className="flex items-center gap-3 transition hover:text-gold hover:translate-x-2 transform duration-300"><Share2 size={16} /> Facebook</a></li>
              <li><a href={siteConfig.youtube || "#"} className="flex items-center gap-3 transition hover:text-gold hover:translate-x-2 transform duration-300"><Play size={16} /> YouTube</a></li>
              <li><a href={siteConfig.tiktok || "#"} className="flex items-center gap-3 transition hover:text-gold hover:translate-x-2 transform duration-300"><Video size={16} /> TikTok</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="group relative rounded-2xl bg-white/[0.02] p-8 border border-white/[0.05] hover:border-gold/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-500 overflow-hidden">
             <motion.div 
              animate={{ y: [0, 10, 0], rotate: [0, -5, 5, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -right-2 top-8 text-gold/10 group-hover:text-gold/20 transition-colors pointer-events-none"
            >
              <Send size={100} strokeWidth={1} />
            </motion.div>
            
            <h3 className="mb-6 text-xs uppercase tracking-[0.2em] text-gold relative z-10 flex items-center gap-2">
              <span className="w-8 h-[1px] bg-gold/50"></span> Contact
            </h3>
            <ul className="space-y-4 text-sm text-accent-ivory/80 relative z-10">
              <li><a href={`tel:${siteConfig.phone}`} className="transition hover:text-gold hover:translate-x-2 inline-block transform duration-300">{siteConfig.phone}</a></li>
              <li>{siteConfig.email ? <a href={`mailto:${siteConfig.email}`} className="transition hover:text-gold hover:translate-x-2 inline-block transform duration-300">{siteConfig.email}</a> : "Email to be added"}</li>
              <li className="leading-relaxed">{siteConfig.location || "Location to be added"}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-accent-ivory/40 md:flex-row">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="https://www.ihope21.com/" target="_blank" rel="noopener noreferrer" className="transition hover:text-gold">Powered by Ihope Solutions</a>
            {/* <Link to="/404" className="transition hover:text-gold">Privacy Policy</Link>
            <Link to="/404" className="transition hover:text-gold">Terms</Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
