// src/app/components/PostBody.js

'use client'

import { useState } from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanityClient';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function PostBody({ content, imagesForGallery }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const portableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageUrl = urlFor(value).url();
        const imageIndex = imagesForGallery.findIndex(img => img.src === imageUrl);
        
        return (
          <figure className="my-8">
            <img 
              src={urlFor(value).width(800).url()} 
              alt={value.alt || 'Blog içeriği görseli'} 
              className="rounded-lg cursor-pointer hover:opacity-80 transition-opacity shadow-md mx-auto"
              onClick={() => {
                if (imageIndex > -1) {
                  setLightboxIndex(imageIndex);
                  setLightboxOpen(true);
                }
              }}
            />
            {value.caption && (
                <figcaption className="text-center text-sm text-gray-500 mt-2">{value.caption}</figcaption>
            )}
          </figure>
        );
      },
    },
  };

  return (
    <>
      <article className="prose prose-lg prose-indigo mx-auto max-w-3xl">
        <PortableText 
          value={content}
          components={portableTextComponents}
        />
      </article>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={imagesForGallery}
        index={lightboxIndex}
      />
    </>
  );
}