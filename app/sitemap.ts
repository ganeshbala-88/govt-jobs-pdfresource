import { MetadataRoute } from 'next';
import resource from './data/resource.json';

const BASE_URL = 'https://yourwebsite.com'; // TODO: Update this to your real domain once deployed

export default function sitemap(): MetadataRoute.Sitemap {
  // Base static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
  ];

  // Dynamic routes based on resources (if you ever add individual resource pages)
  // For now, since everything is on the home page, the static route is enough.
  // But we can simulate deeper indexing if needed:
  const resourceRoutes: MetadataRoute.Sitemap = resource.map((item) => ({
    url: `${BASE_URL}/#${item.exam.replace(/\s+/g, '-').toLowerCase()}`,
    lastModified: item.updatedAt ? new Date(item.updatedAt) : new Date(),
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  return [...staticRoutes, ...resourceRoutes];
}
