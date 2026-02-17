import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const DOMAIN = "https://ecardify.byalif.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const localeRoutes = ["/", "/ja", "/de", "/ko", "/fr", "/pt", "/zh", "/es", "/it"];
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = localeRoutes.map((path) => ({
    url: `${DOMAIN}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1.0 : 0.8,
  }));

  entries.push(
    {
      url: `${DOMAIN}/privacy`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
    {
      url: `${DOMAIN}/terms`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    }
  );

  return entries;
}
