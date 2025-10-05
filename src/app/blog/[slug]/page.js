// src/app/blog/[slug]/page.js

import { client, urlFor } from '@/lib/sanityClient';
import PostBody from '@/components/PostBody';
import PostHero from '@/components/PostHero';
import SimilarPosts from '@/components/SimilarPosts';
import ShareButtons from '@/components/ShareButtons';
import Comments from '@/components/Comments';

async function getPost(slug) {
  const query = `*[_type == "post" && slug.current == $slug][0]{
    ...,
    author->, 
    "categories": categories[]->title,
    "bodyImages": body[].asset->
  }`;
  return await client.fetch(query, { slug });
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  if (!post) {
    return <div>Yazı bulunamadı.</div>
  }

  const postUrl = `https://www.capparocks.com/blog/${post.slug.current}`;
  const imagesForGallery = post.bodyImages
    .filter(image => image !== null)
    .map(image => ({ src: urlFor(image).url() }));

  return (
    <div className="bg-gray-100">
      <PostHero
        title={post.title}
        excerpt={post.excerpt}
        author={post.author}
        publishedAt={post.publishedAt}
        mainImage={post.mainImage}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          
          <article className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-8">
            <PostBody content={post.body} imagesForGallery={imagesForGallery} />
          </article>

          <aside className="mt-12 lg:mt-0">
            <SimilarPosts currentPostId={post._id} />
          </aside>
        </div>
      </div>
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 bg-white rounded-2xl shadow-lg my-12">
        <ShareButtons url={postUrl} title={post.title} />
        <Comments />
      </div>

    </div>
  );
}