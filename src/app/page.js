// src/app/page.js

import HomePageClient from "../components/HomePageClient";
import { client } from "@/lib/sanityClient";

export const metadata = {
  title: 'Capparocks | Kapadokya Sosyal Medya ve Web Tasarım',
  description: 'Kapadokya\'daki otel ve işletmeler için profesyonel web tasarım, Google reklamları ve sosyal medya hizmetleri. Capparocks ile dijitalde öne çıkın!',
  
  openGraph: {
    title: 'Capparocks | Kapadokya Sosyal Medya ve Web Tasarım',
    description: 'Nevşehir ve Ürgüp\'te oteller için dijital ajans hizmetleri.',
    url: 'https://www.capparocks.com', 
    siteName: 'Capparocks Dijital',
    images: [
      {
        url: 'https://www.capparocks.com/paylasim-gorseli.png', // 1200x630px
        width: 1200,
        height: 630,
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },

  
  verification: {
    google: 'Pp7R8BV2Y0HxjjDx8XudF9ldQnuGchyusSGZN_Su-4o', 
  },
};

async function getLatestPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc)[0...3]`;
  const posts = await client.fetch(query);
  return posts;
}

export default async function HomePage() {
  const posts = await getLatestPosts();

  const businessData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Capparocks | Sosyal Medya ve Web Tasarım",
    "image": "https://www.capparocks.com/logoR.png",
    "url": "https://www.capparocks.com/",
    "telephone": "+905313700397",
    "email": "iletisim@capparocks.com",
    "address": { "@type": "PostalAddress", "addressLocality": "Nevşehir", "addressCountry": "TR" },
    "areaServed": { "@type": "Place", "name": "Kapadokya" },
    "openingHoursSpecification": [{
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessData) }}
      />
      <HomePageClient posts={posts} />
    </>
  );
}