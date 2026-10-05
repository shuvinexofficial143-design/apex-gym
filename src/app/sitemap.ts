import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
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
  ];

  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/free-trial" || route === "/membership" ? 0.9 : 0.7,
  }));
}
