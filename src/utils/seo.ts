import { siteConfig } from "../data/site";

interface SeoOptions {
  title: string;
  description: string;
  path?: string;
  image?: string;
  type?: "website" | "article";
}

const setMeta = (selector: string, attr: "content" | "href", value: string) => {
  let element = document.head.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;

  if (!element) {
    element = selector.startsWith("link")
      ? document.createElement("link")
      : document.createElement("meta");

    if (selector.includes("property=")) {
      element.setAttribute("property", selector.match(/"([^"]+)"/)?.[1] ?? "");
    } else if (selector.includes("name=")) {
      element.setAttribute("name", selector.match(/"([^"]+)"/)?.[1] ?? "");
    } else if (selector.includes("rel=")) {
      element.setAttribute("rel", selector.match(/"([^"]+)"/)?.[1] ?? "");
    }

    document.head.appendChild(element);
  }

  element.setAttribute(attr, value);
};

export const applySeo = ({ title, description, path = "/", image, type = "website" }: SeoOptions) => {
  const url = `${siteConfig.canonicalUrl}${path === "/" ? "" : path}`;
  const ogImage = image ?? siteConfig.defaultOgImage;

  document.title = title;
  setMeta('meta[name="description"]', "content", description);
  setMeta('link[rel="canonical"]', "href", url);
  setMeta('meta[property="og:title"]', "content", title);
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="og:url"]', "content", url);
  setMeta('meta[property="og:image"]', "content", ogImage);
  setMeta('meta[property="og:type"]', "content", type);
  setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
  setMeta('meta[name="twitter:title"]', "content", title);
  setMeta('meta[name="twitter:description"]', "content", description);
  setMeta('meta[name="twitter:image"]', "content", ogImage);
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  name: siteConfig.name,
  telephone: siteConfig.phone,
  url: siteConfig.canonicalUrl,
  image: siteConfig.defaultOgImage,
};
