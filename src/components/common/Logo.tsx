import logoImg from "../../assets/images/Logo/Logo.png";

interface LogoProps {
  compact?: boolean;
}

export default function Logo({ compact = false }: LogoProps) {
  return (
    <img 
      src={logoImg} 
      alt="Johnny Video Production Logo" 
      className={`object-contain ${compact ? 'h-10' : 'h-16 md:h-20'} w-auto`}
    />
  );
}
