export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readingTime: string;
  excerpt: string;
  image: string;
  intro: string;
  sections: Array<{ heading: string; body: string }>;
}

export const blogCategories = [
  "Wedding Films",
  "Production",
  "Photography",
  "Behind The Scenes",
  "Tips",
  "Stories",
  "Commercial",
];

export const blogPosts: BlogPost[] = [
  {
    slug: "cinematic-wedding-films",
    title: "How We Create Cinematic Wedding Films",
    category: "Wedding Films",
    date: "2026-05-12",
    readingTime: "5 min read",
    excerpt: "A look at how emotion, pacing, light, and sound turn a wedding day into a lasting film.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgun8iHGDXkakURjCfKJMldOENLhUSszmXeWmT6RuALQ&s=10",
    intro:
      "A cinematic wedding film is built from more than beautiful footage. It begins with listening, anticipation, and a clear emotional direction.",
    sections: [
      {
        heading: "Story before spectacle",
        body: "We focus on the people, voices, atmosphere, and small gestures that make each celebration personal. The camera follows meaning before decoration.",
      },
      {
        heading: "Light, rhythm, and sound",
        body: "The final edit is shaped through pacing, color, music, natural audio, and carefully selected details so the film feels alive every time it is watched.",
      },
    ],
  },
  {
    slug: "commercial-production-behind-scenes",
    title: "Behind the Scenes of a Commercial Production",
    category: "Commercial",
    date: "2026-04-22",
    readingTime: "4 min read",
    excerpt: "From concept to delivery, commercial film production depends on planning and visual discipline.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpjQiJCvcbthBQDXWWpAziEJahH24PK8U4Asf2uePwIw&s=10",
    intro:
      "Commercial video succeeds when strategy and craft move together. Every shot needs to support the message.",
    sections: [
      {
        heading: "Creative direction",
        body: "We define the audience, tone, structure, and visual language before production begins, so the shoot stays focused and efficient.",
      },
      {
        heading: "Production value",
        body: "Lighting, composition, motion, wardrobe, locations, and editing combine to create a brand film that feels polished and memorable.",
      },
    ],
  },
  {
    slug: "storytelling-in-brand-video",
    title: "The Power of Storytelling in Brand Video",
    category: "Production",
    date: "2026-03-18",
    readingTime: "6 min read",
    excerpt: "Strong brand films do more than explain. They create recognition, trust, and emotional memory.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa6dzy5JSZsL-CEn-utZo6MpYilYHpnc88wND_jenANQ&s=10",
    intro:
      "People remember stories faster than claims. That is why the strongest brand videos are designed around feeling and clarity.",
    sections: [
      {
        heading: "Make the audience care",
        body: "The message becomes more powerful when the viewer can feel the stakes, the promise, and the people behind the brand.",
      },
      {
        heading: "Design for memory",
        body: "Color, pacing, recurring visual motifs, and a focused edit help a brand film stay with the viewer after the screen goes dark.",
      },
    ],
  },
];
