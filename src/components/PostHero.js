// src/app/components/PostHero.js
import { urlFor } from '@/lib/sanityClient';

export default function PostHero({ title, excerpt, author, publishedAt, mainImage }) {
  return (
    <div className="relative bg-gray-900 py-24 sm:py-32">
      <img
        src={urlFor(mainImage).width(1920).height(800).url()}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover brightness-50"
      />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-serif">
          {title}
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-300">
          {excerpt}
        </p>
        {author && (
          <div className="mt-6 flex items-center justify-center gap-x-4">
            <img src={urlFor(author.image).width(80).url()} alt={author.name} className="h-10 w-10 rounded-full bg-gray-50" />
            <div className="text-sm leading-6">
              <p className="font-semibold text-white">{author.name}</p>
              <time dateTime={publishedAt} className="text-gray-400">
                {new Date(publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </time>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}