import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {label && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-xs uppercase tracking-[0.3em] text-gold"
        >
          {label}
        </motion.p>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="font-heading text-5xl leading-[0.95] text-accent-ivory md:text-7xl lg:text-8xl"
      >
        {title.split("\n").map((line) => (
          <span className="block" key={line}>
            {line}
          </span>
        ))}
      </motion.h2>
    </div>
  );
}
