import type { MetadataRoute } from "next";
import { TRACKS } from "@/lib/curriculum";

export const dynamic = "force-static";

const BASE_URL = "https://codequest.academy";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL,              lastModified: new Date(), changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE_URL}/learn`,   lastModified: new Date(), changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE_URL}/dashboard`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/parents`,  lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const trackRoutes: MetadataRoute.Sitemap = TRACKS.map((track) => ({
    url: `${BASE_URL}/learn/${track.id}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const lessonRoutes: MetadataRoute.Sitemap = TRACKS.flatMap((track) =>
    track.lessons.map((lesson) => ({
      url: `${BASE_URL}/learn/${track.id}/${lesson.id}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...trackRoutes, ...lessonRoutes];
}
