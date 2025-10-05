// src/app/sitemap.js

import { client } from '@/lib/sanityClient';

// Buraya sitenin tam alan adını yazmalısın.
const URL = 'https://www.capparocks.com';

export default async function sitemap() {
  // Sanity'den tüm blog yazılarını çekerek dinamik URL'ler oluşturuyoruz.
  const posts = await client.fetch(`*[_type == "post"]{ "slug": slug.current, "_updatedAt": _updatedAt }`);

  const postUrls = posts.map(post => ({
    url: `${URL}/blog/${post.slug}`,
    lastModified: new Date(post._updatedAt).toISOString(),
  }));

  // Sitedeki statik sayfaların listesi
  const staticUrls = [
    { url: URL, lastModified: new Date().toISOString() },
    { url: `${URL}/hizmetlerimiz`, lastModified: new Date().toISOString() },
    { url: `${URL}/hakkimizda`, lastModified: new Date().toISOString() },
    { url: `${URL}/blog`, lastModified: new Date().toISOString() },
    { url: `${URL}/iletisim`, lastModified: new Date().toISOString() },
    { url: `${URL}/portfolyo`, lastModified: new Date().toISOString() },
  ];

  return [...staticUrls, ...postUrls];
}