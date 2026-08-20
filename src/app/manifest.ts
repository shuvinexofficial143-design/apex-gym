import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "APEX GYM",
    short_name: "APEX",
    description: "Premium gym membership, workouts, nutrition, classes and AI fitness tools.",
    start_url: "/",
    display: "standalone",
    background_color: "#080808",
    theme_color: "#dfff00",
    orientation: "portrait-primary",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}

