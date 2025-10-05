// src/app/components/SimilarPosts.js
import { client, urlFor } from '@/lib/sanityClient';
import Link from 'next/link';

async function getSimilarPosts(currentPostId) {
    // Mevcut yazı hariç, en son 3 yazıyı çek
    const query = `*[_type == "post" && _id != $currentPostId] | order(publishedAt desc)[0...3]`;
    return await client.fetch(query, { currentPostId });
}

export default async function SimilarPosts({ currentPostId }) {
    const posts = await getSimilarPosts(currentPostId);

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 font-serif">Benzer Yazılar</h3>
            <ul className="mt-4 space-y-4">
                {posts.map(post => (
                    <li key={post._id}>
                        <Link href={`/blog/${post.slug.current}`} className="group flex items-center gap-x-4">
                            <img src={urlFor(post.mainImage).width(120).height(80).url()} alt={post.title} className="h-16 w-24 rounded-md object-cover flex-shrink-0" />
                            <div>
                                <h4 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">{post.title}</h4>
                                <time className="text-xs text-gray-500">{new Date(post.publishedAt).toLocaleDateString('tr-TR')}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}