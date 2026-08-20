import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Reveal from "../components/common/Reveal";
import SectionHeading from "../components/common/SectionHeading";
import { blogCategories, blogPosts } from "../data/blogPosts";
import { useSeo } from "../hooks/useSeo";

export default function Blog() {
  const [featured, ...posts] = blogPosts;

  useSeo({
    title: "Stories & Insights | Johnny Video Production Blog",
    description:
      "Read Johnny Video Production stories, wedding film tips, commercial production insights and behind-the-scenes filmmaking notes.",
    path: "/blog",
  });

  return (
    <div className="bg-black-cinema">
      <section className="relative min-h-[60vh] overflow-hidden pt-32">
        <img
          src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1800&auto=format&fit=crop"
          alt="Editing desk and production notes"
          className="absolute inset-0 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/70 to-black-cinema/20" />
        <div className="relative mx-auto flex min-h-[50vh] max-w-7xl items-end px-5 pb-20 md:px-8">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-gold">Journal</p>
            <h1 className="font-heading text-7xl leading-none text-accent-ivory md:text-9xl">Stories &<br />Insights.</h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-10 flex flex-wrap gap-3">
            {blogCategories.map((category) => (
              <span key={category} className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-accent-ivory/65">
                {category}
              </span>
            ))}
          </div>

          <Reveal className="mb-20 grid gap-8 bg-black-rich md:grid-cols-2">
            <img src={featured.image} alt={featured.title} className="h-full min-h-[380px] w-full object-cover" />
            <div className="flex flex-col justify-center p-7 md:p-10">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">{featured.category} • {featured.date}</p>
              <h2 className="mb-5 font-heading text-5xl leading-none text-accent-ivory">{featured.title}</h2>
              <p className="mb-8 text-accent-ivory/65">{featured.excerpt}</p>
              <Button to={`/blog/${featured.slug}`}>Read Article</Button>
            </div>
          </Reveal>

          <SectionHeading label="Latest" title={"Recent\nArticles."} />
          <div className="grid gap-7 md:grid-cols-2">
            {posts.map((post) => (
              <Reveal key={post.slug} className="group border border-white/8 bg-white/[0.03]">
                <Link to={`/blog/${post.slug}`}>
                  <img src={post.image} alt={post.title} loading="lazy" className="aspect-[16/9] w-full object-cover opacity-80 transition group-hover:opacity-100" />
                  <div className="p-6">
                    <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">{post.category} • {post.date}</p>
                    <h2 className="mb-3 font-heading text-4xl text-accent-ivory">{post.title}</h2>
                    <p className="text-sm text-accent-ivory/60">{post.excerpt}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
