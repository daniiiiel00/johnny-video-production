import type { FormEvent, ReactNode } from "react";
import { useState } from "react";
import { CheckCircle, Mail, MapPin, Phone, Camera, Video, Film, Aperture } from "lucide-react";
import { motion } from "framer-motion";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import { siteConfig } from "../data/site";
import { useSeo } from "../hooks/useSeo";

const projectTypes = ["Wedding Film", "Commercial", "Event", "Music Video", "Corporate", "Documentary", "Other"];
const budgets = ["Select Budget", "Entry Production", "Premium Production", "Luxury Production", "Ongoing Brand Work"];

const CONTACT_ICONS = [
  <Camera key="1" className="w-full h-full text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" strokeWidth="2.5" />,
  <Video key="2" className="w-full h-full text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" strokeWidth="2.5" />,
  <Film key="3" className="w-full h-full text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" strokeWidth="2.5" />,
  <Aperture key="4" className="w-full h-full text-gold drop-shadow-[0_0_12px_rgba(212,175,55,0.8)]" strokeWidth="2.5" />,
];

interface FormState {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  date: string;
  location: string;
  budget: string;
  source: string;
  message: string;
}

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  projectType: "Wedding Film",
  date: "",
  location: "",
  budget: "Select Budget",
  source: "",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const [particles] = useState(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 24 + 16,
    iconIndex: Math.floor(Math.random() * CONTACT_ICONS.length),
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 15,
    delay: Math.random() * -20,
    rotation: Math.random() > 0.5 ? 360 : -360,
  })));

  useSeo({
    title: "Contact Johnny Video Production | Book a Cinematic Production",
    description:
      "Send a project inquiry to Johnny Video Production for wedding films, commercial production, events, music videos, corporate films and documentaries.",
    path: "/contact",
  });

  const update = (key: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const validate = () => {
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) nextErrors.name = "Full name is required.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "A valid email is required.";
    if (!form.phone.trim()) nextErrors.phone = "Phone number is required.";
    if (!form.message.trim()) nextErrors.message = "Tell us a little about your project.";
    if (form.budget === "Select Budget") nextErrors.budget = "Please choose an estimated budget.";
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const submit = (event: FormEvent) => {
    event.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("success");
      setForm(initialForm);
    }, 700);
  };

  const inputClass =
    "w-full rounded-xl border border-gold/20 bg-black-cinema/50 px-5 py-4 text-accent-ivory outline-none transition-all duration-300 placeholder:text-accent-ivory/35 focus:border-gold focus:bg-gold/5 focus:shadow-[0_0_15px_rgba(212,175,55,0.2)]";

  return (
    <div className="bg-black-cinema">
      <section className="relative min-h-[62vh] overflow-hidden pt-32">
        <img
          src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1400&auto=format&fit=crop"
          alt="Cinema production monitor on set"
          className="absolute inset-0 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/75 to-black-cinema/20" />
        <div className="relative mx-auto flex min-h-[52vh] max-w-7xl items-end px-5 pb-20 md:px-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">Booking</p>
            <h1 className="font-heading text-6xl leading-none text-accent-ivory md:text-9xl">
              Let's Create
              <br />
              Something Remarkable.
            </h1>
          </div>
        </div>
      </section>

      <section className="relative py-32 bg-black-rich overflow-hidden border-t border-white/5">
        
        {/* Floating Icons Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              className="absolute flex items-center justify-center mix-blend-screen"
              style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                rotate: [0, p.rotation],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: p.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: p.delay,
              }}
            >
              {CONTACT_ICONS[p.iconIndex]}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-5 lg:grid-cols-[1.3fr_0.7fr] md:px-8">
          
          <Reveal>
            <SectionHeading label="Project Inquiry" title={"Tell Us\nYour Story."} />
            <form onSubmit={submit} noValidate className="grid gap-6 md:grid-cols-2 rounded-2xl border border-gold/15 bg-black-cinema/80 backdrop-blur-md p-8 md:p-10 shadow-[0_10px_40px_rgba(212,175,55,0.05)]">
              <Field label="Full Name" error={errors.name}>
                <input className={inputClass} value={form.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
              </Field>
              <Field label="Email" error={errors.email}>
                <input className={inputClass} value={form.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input className={inputClass} value={form.phone} onChange={(event) => update("phone", event.target.value)} placeholder="+251 ..." />
              </Field>
              <Field label="Project Type">
                <select className={inputClass} value={form.projectType} onChange={(event) => update("projectType", event.target.value)}>
                  {projectTypes.map((type) => <option key={type}>{type}</option>)}
                </select>
              </Field>
              <Field label="Event / Production Date">
                <input type="date" className={inputClass} value={form.date} onChange={(event) => update("date", event.target.value)} />
              </Field>
              <Field label="Location">
                <input className={inputClass} value={form.location} onChange={(event) => update("location", event.target.value)} placeholder="City / venue" />
              </Field>
              <Field label="Estimated Budget" error={errors.budget} className="md:col-span-2">
                <select className={inputClass} value={form.budget} onChange={(event) => update("budget", event.target.value)}>
                  {budgets.map((budget) => <option key={budget}>{budget}</option>)}
                </select>
              </Field>
              <Field label="Tell Us About Your Project" error={errors.message} className="md:col-span-2">
                <textarea className={`${inputClass} min-h-[160px] resize-y`} value={form.message} onChange={(event) => update("message", event.target.value)} placeholder="What are we filming? What should it feel like?" />
              </Field>
              <div className="md:col-span-2 mt-4">
                <Button type="submit" className="w-full md:w-auto shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]">{status === "loading" ? "Sending..." : "Send Project Inquiry"}</Button>
                {status === "success" && (
                  <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 flex items-center gap-2 text-sm text-gold-bright">
                    <CheckCircle className="size-5 drop-shadow-[0_0_8px_rgba(212,175,55,0.8)]" /> Inquiry received successfully. We will be in touch shortly.
                  </motion.p>
                )}
              </div>
            </form>
          </Reveal>

          <Reveal className="lg:pt-36">
            <div className="rounded-2xl border border-gold/15 bg-black-cinema/80 backdrop-blur-md p-8 md:p-10 shadow-[0_10px_40px_rgba(212,175,55,0.05)] hover:border-gold/30 transition-colors duration-500">
              <h2 className="mb-8 font-heading text-4xl text-accent-ivory text-shadow-gold">Contact Details</h2>
              <Info icon={<Phone />} label="Phone" value={siteConfig.phone} href={`tel:${siteConfig.phone}`} />
              <Info icon={<Mail />} label="Email" value={siteConfig.email || "Email to be added"} href={siteConfig.email ? `mailto:${siteConfig.email}` : undefined} />
              <Info icon={<MapPin />} label="Location" value={siteConfig.location || "Addis Ababa, Ethiopia"} />
              
              {/* Google Maps Embed */}
              <div className="mt-8 rounded-xl overflow-hidden border border-gold/20 hover:border-gold/50 hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] transition-all duration-500 h-56 w-full filter grayscale hover:grayscale-0 relative">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126115.11522851502!2d38.7024844!3d9.0107936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x8467b6b037a24d49!2sAddis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1716900000000!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Johnny Video Production Location"
                ></iframe>
                {/* Pointer events none overlay to prevent accidental scrolling inside iframe unless hovered intentionally */}
                <div className="absolute inset-0 pointer-events-none border border-gold/20 rounded-xl group-hover:border-gold/50 transition-colors" />
              </div>

              <div className="mt-8 border-t border-gold/15 pt-8">
                <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Social</p>
                <div className="grid gap-3 text-sm text-accent-ivory/80">
                  <a href={siteConfig.instagram || "#"} className="hover:text-gold hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span> Instagram</a>
                  <a href={siteConfig.facebook || "#"} className="hover:text-gold hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span> Facebook</a>
                  <a href={siteConfig.tiktok || "#"} className="hover:text-gold hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span> TikTok</a>
                  <a href={siteConfig.youtube || "#"} className="hover:text-gold hover:translate-x-2 transition-transform duration-300 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-gold inline-block opacity-0 group-hover:opacity-100 transition-opacity"></span> YouTube</a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function Field({ label, error, children, className = "" }: { label: string; error?: string; children: ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-xs uppercase tracking-[0.18em] text-accent-ivory/70">{label}</span>
      {children}
      {error && <span className="mt-2 block text-sm text-accent-amber">{error}</span>}
    </label>
  );
}

function Info({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <span className="flex gap-4 border-b border-white/8 py-5">
      <span className="text-gold [&>svg]:size-5">{icon}</span>
      <span>
        <span className="block text-xs uppercase tracking-[0.2em] text-gold">{label}</span>
        <span className="mt-1 block text-accent-ivory/75">{value}</span>
      </span>
    </span>
  );

  return href ? <a href={href} className="block transition hover:text-gold">{content}</a> : content;
}
