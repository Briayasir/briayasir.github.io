import type { MetadataRoute } from "next";
import { personalInfo } from "@/data/portfolio";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: personalInfo.portfolio.replace(/\/$/, ""),
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
