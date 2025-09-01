import { MetadataRoute } from "next";
import { client } from "@/sanity/lib/client";
import { sitemapQuery, sitemapSettingsQuery } from "@/sanity/lib/queries/misc";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const [paths, sitemapSettings] = await Promise.all([
      client.fetch(sitemapQuery),
      client.fetch(sitemapSettingsQuery),
    ]);

    const baseUrl = process.env.VERCEL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000";

    let sitemapEntries: MetadataRoute.Sitemap = [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 1,
      },
    ];

    // Add existing paths, filtering out removed ones
    if (paths) {
      const filteredPaths = paths.filter((path: any) => {
        const href = path.href;
        return href && !sitemapSettings?.removeFromSitemap?.includes(href);
      });

      sitemapEntries.push(
        ...filteredPaths.map((path: any) => ({
          url: new URL(path.href, baseUrl).toString(),
          lastModified: new Date(path._updatedAt),
          changeFrequency: "weekly" as const,
          priority: 1,
        }))
      );
    }

    // Add manually added paths
    if (sitemapSettings?.addToSitemap) {
      sitemapEntries.push(
        ...sitemapSettings.addToSitemap.map((path: string) => ({
          url: new URL(path, baseUrl).toString(),
          lastModified: new Date(),
          changeFrequency: "weekly" as const,
          priority: 1,
        }))
      );
    }

    return sitemapEntries;
  } catch (error) {
    console.error("Failed to generate sitemap:", error);
    return [];
  }
}
