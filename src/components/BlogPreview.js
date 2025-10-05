// src/app/components/BlogPreview.js DOSYASININ YENİ HALİ

import Link from 'next/link';
import { urlFor } from '@/lib/sanityClient';

// Bu bileşen artık "posts" verisini dışarıdan bir prop olarak alıyor.
export default function BlogPreview({ posts }) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl font-serif">Blog'dan Son Yazılar</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Sektördeki en son trendler ve ipuçları.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <Link 
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group flex flex-col items-start justify-between rounded-2xl border border-gray-200 p-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="relative w-full">
                <img
                  src={urlFor(post.mainImage).width(800).height(600).url()}
                  alt={post.title || "Blog görseli"}
                  className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.publishedAt} className="text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <div className="relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-blue-600">
                    {post.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
         <div className="mt-16 text-center">
            <Link href="/blog" className="text-sm font-semibold leading-6 text-blue-600 hover:text-blue-800">
                Tüm yazıları gör <span aria-hidden="true">→</span>
            </Link>
        </div>
      </div>
    </div>
  )
}