import Button from "../components/common/Button";
import { useSeo } from "../hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "404 | Johnny Video Production",
    description: "The requested Johnny Video Production page could not be found.",
    path: "/404",
  });

  return (
    <section className="relative grid min-h-screen place-items-center overflow-hidden bg-black-cinema px-5 pt-28 text-center">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(212,175,55,0.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(17,27,53,0.35),transparent_28%)]" />
      <div className="relative">
        <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">404</p>
        <h1 className="mb-6 font-heading text-7xl leading-none text-accent-ivory md:text-9xl">Frame Not Found.</h1>
        <p className="mx-auto mb-10 max-w-xl text-accent-ivory/65">This scene is missing, but the story continues from the main gallery.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/">Back Home</Button>
          <Button to="/gallery" variant="outline">View Gallery</Button>
        </div>
      </div>
    </section>
  );
}
