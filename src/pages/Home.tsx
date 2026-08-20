import Hero from '../components/home/Hero';
import Intro from '../components/home/Intro';
import FeaturedProjects from '../components/home/FeaturedProjects';
import Showreel from '../components/home/Showreel';
import Services from '../components/home/Services';
import FinalCTA from '../components/home/FinalCTA';
import { BehindScenes, LatestPosts, Marquee, Partners, Process, QuoteSection, SocialFeed, Testimonials, WhyJohnny } from '../components/home/MoreHomeSections';
import { useSeo } from '../hooks/useSeo';

export default function Home() {
  useSeo({
    title: "Johnny Video Production | Cinematic Videography & Film Production",
    description: "Johnny Video Production creates cinematic wedding films, commercial productions, event videos and professional visual stories crafted with creativity, emotion and purpose.",
    path: "/",
  });

  return (
    <div className="bg-black-cinema min-h-screen">
      <Hero />
      <Intro />
      <Marquee />
      <FeaturedProjects />
      <Showreel />
      <Services />
      <WhyJohnny />
      <QuoteSection />
      <Testimonials />
      <Process />
      <Partners />
      <BehindScenes />
      <LatestPosts />
      <SocialFeed />
      <FinalCTA />
    </div>
  );
}
