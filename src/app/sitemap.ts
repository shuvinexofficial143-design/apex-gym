import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.NEXT_PUBLIC_SITE_URL || "https://apex-gym.example.com";
  const routes = [
    "",
    "/about",
    "/programs",
    "/membership",
    "/trainers",
    "/classes",
    "/gallery",
    "/transformations",
    "/locations",
    "/contact",
    "/free-trial",
    "/search",
  ];

  return routes.map((route) => ({
    url: `${site}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
