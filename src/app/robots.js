// src/app/robots.js


const URL = 'https://www.capparocks.com';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*', 
        allow: '/', 
        disallow: '/admin/', 
      },
    ],
    sitemap: `${URL}/sitemap.xml`, 
  };
}