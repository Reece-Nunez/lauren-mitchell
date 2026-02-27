import type { MetadataRoute } from "next";

const BASE_URL = "https://www.laurenmitchellstudio.com";

const galleries = [
  "Emma_-_Senior",
  "Luca_-_portraits",
  "adrina_-_pregnancy_announcement_session",
  "bonczyk_family",
  "coats_family",
  "in_home_session",
  "magruders_-_in_home_newborn_session",
  "schultheis_family",
  "williams_family",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const galleryRoutes = galleries.map((folder) => ({
    url: `${BASE_URL}/gallery/${folder}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/sessions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...galleryRoutes,
  ];
}
