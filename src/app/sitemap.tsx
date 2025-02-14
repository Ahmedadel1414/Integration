import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://integration-swart.vercel.app/', lastModified: new Date() },
    { url: 'https://integration-swart.vercel.app/our-services', lastModified: new Date() },
    { url: 'https://integration-swart.vercel.app/about-us', lastModified: new Date() },
    { url: 'https://integration-swart.vercel.app/contact-us', lastModified: new Date() },
    { url: 'https://integration-swart.vercel.app/terms-and-conditions', lastModified: new Date() },
  ];
}
