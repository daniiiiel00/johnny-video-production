import type { ReactNode } from "react";
import { Link } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  to,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const baseStyle =
    "inline-flex min-h-12 items-center justify-center gap-2 px-7 py-3 text-center text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold";

  const variants = {
    primary:
      "bg-gradient-gold text-black-cinema shadow-[0_0_28px_rgba(212,175,55,0.28)] hover:-translate-y-0.5 hover:brightness-110",
    outline:
      "border border-gold/70 text-gold hover:-translate-y-0.5 hover:bg-gold hover:text-black-cinema",
    ghost: "text-accent-ivory hover:text-gold",
  };

  const combinedClass = `${baseStyle} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClass}>
      {children}
    </button>
  );
}
