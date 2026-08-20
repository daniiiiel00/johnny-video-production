export type ProjectCategory =
  | "Wedding"
  | "Commercial"
  | "Event"
  | "Music"
  | "Fashion"
  | "Corporate"
  | "Documentary";

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: ProjectCategory;
  year: string;
  thumbnail: string;
  video: string;
  client: string;
  description: string;
}

export const projectCategories = [
  "All",
  "Wedding",
  "Commercial",
  "Event",
  "Music",
  "Fashion",
  "Corporate",
  "Documentary",
] as const;

export const projects: Project[] = [
  {
    id: "1",
    title: "Eternal Promise",
    slug: "eternal-promise-wedding",
    category: "Wedding",
    year: "2025",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgzHk1YyM9_lspzBkYyKETaipFTTgVzAXbw44O-QwiA&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "Private Couple",
    description: "A luminous wedding film built around vows, movement, family, and golden-hour emotion.",
  },
  {
    id: "2",
    title: "Urban Motion",
    slug: "urban-motion-commercial",
    category: "Commercial",
    year: "2024",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtiiPXHS0o-hm6pwdbr0rrlPncyssuxWVkcdzgRCB2vg&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "City Walk Brands",
    description: "A high-energy brand film with editorial styling, kinetic camera work, and bold color.",
  },
  {
    id: "3",
    title: "Night Rhythm",
    slug: "night-rhythm-music",
    category: "Music",
    year: "2024",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEGvMtuYwbzlU5FoeadDlRFcjf_DXbd09Z7_evRlxUxQ&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "Independent Artist",
    description: "A concept-driven music video shaped by atmosphere, performance, and night-lit texture.",
  },
  {
    id: "4",
    title: "The Artisan",
    slug: "the-artisan-documentary",
    category: "Documentary",
    year: "2023",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZF-nuH10pGDZ4-YrvULGUbGD34XPFimK43ngWbFRWzw&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "Craft & Heritage",
    description: "An intimate documentary portrait about real people, memory, craft, and purpose.",
  },
  {
    id: "5",
    title: "Midnight Gala",
    slug: "midnight-gala-event",
    category: "Event",
    year: "2025",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDfJFT3_o1hJZFqHhAagJSJGJxZ3zvbZBhBbE9QiWi-Q&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "Private Event",
    description: "Luxury event coverage with polished detail shots, guest energy, and atmospheric pacing.",
  },
  {
    id: "6",
    title: "Velvet Editorial",
    slug: "velvet-editorial-fashion",
    category: "Fashion",
    year: "2025",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq1WnNRrLXjCbbbjwfLdaT7s8MLkjH65A8nojpj1NFMQ&s=10",
    video: "https://www.youtube.com/embed/3dAl0XoxcvE?si=Ugjd_tENEd66z0Gd",
    client: "Fashion Studio",
    description: "A fashion film combining sculptural light, soft motion, and campaign-ready rhythm.",
  },
  
];
