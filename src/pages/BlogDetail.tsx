import { Link, Navigate, useParams } from "react-router-dom";
import { Share2 } from "lucide-react";
import Button from "../components/common/Button";
import { blogPosts } from "../data/blogPosts";
import { useSeo } from "../hooks/useSeo";

export default function BlogDetail() {
  const { slug } = useParams();
  const postIndex = blogPosts.findIndex((item) => item.slug === slug);
  const post = blogPosts[postIndex];
  const previous = blogPosts[postIndex - 1];
  const next = blogPosts[postIndex + 1];

  useSeo({
    title: post ? `${post.title} | Johnny Video Production` : "Article Not Found | Johnny Video Production",
    description: post?.excerpt ?? "The requested Johnny Video Production article could not be found.",
    path: `/blog/${slug ?? ""}`,
    image: post?.image,
    type: "article",
  });

  if (!post) return <Navigate to="/404" replace />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    image: post.image,
    author: { "@type": "Organization", name: "Johnny Video Production" },
  };

  return (
    <article className="bg-black-cinema">
      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
      <header className="relative min-h-[78vh] overflow-hidden pt-32">
        <img src={post.image} alt={post.title} className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black-cinema via-black-cinema/75 to-black-cinema/20" />
        <div className="relative mx-auto flex min-h-[66vh] max-w-5xl items-end px-5 pb-20 md:px-8">
          <div>
            <nav className="mb-6 text-xs uppercase tracking-[0.2em] text-accent-ivory/55">
              <Link to="/blog" className="hover:text-gold">Blog</Link> / {post.category}
            </nav>
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gold">{post.category} • {post.date} • {post.readingTime}</p>
            <h1 className="font-heading text-6xl leading-none text-accent-ivory md:text-8xl">{post.title}</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1fr_260px] md:px-8">
        <div className="prose prose-invert max-w-none prose-p:text-lg prose-p:leading-8 prose-p:text-accent-ivory/70 prose-headings:font-heading prose-headings:text-accent-ivory prose-blockquote:border-gold prose-blockquote:text-accent-ivory">
          <p className="text-2xl leading-10 text-accent-ivory/82">{post.intro}</p>
          <blockquote>Every production is an opportunity to preserve atmosphere, intention and human feeling.</blockquote>
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
            </section>
          ))}
          <img src={post.image} alt={`${post.title} editorial still`} loading="lazy" className="my-10 aspect-[16/9] w-full object-cover" />
        </div>

        <aside className="space-y-8">
          <div className="border border-gold/15 bg-black-rich p-6">
            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">Share</p>
            <div className="flex gap-3 text-accent-ivory/70">
              <a href="#" aria-label="Share article" className="hover:text-gold"><Share2 className="size-5" /></a>
              <a href="#" className="text-xs uppercase tracking-[0.18em] hover:text-gold">Facebook</a>
              <a href="#" className="text-xs uppercase tracking-[0.18em] hover:text-gold">LinkedIn</a>
            </div>
          </div>
          <div className="border border-white/8 bg-white/[0.03] p-6">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-gold">Related</p>
            {blogPosts.filter((item) => item.slug !== post.slug).slice(0, 2).map((item) => (
              <Link key={item.slug} to={`/blog/${item.slug}`} className="mb-4 block text-accent-ivory/75 hover:text-gold">
                {item.title}
              </Link>
            ))}
          </div>
        </aside>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 px-5 pb-20 md:flex-row md:px-8">
        {previous ? <Button to={`/blog/${previous.slug}`} variant="outline">← Previous Article</Button> : <span />}
        {next ? <Button to={`/blog/${next.slug}`} variant="outline">Next Article →</Button> : <Button to="/blog" variant="outline">Back To Blog</Button>}
      </div>
    </article>
  );
}
