import React from 'react';
// import { GetStaticProps } from 'next';
import BlogCard from '../../components/BlogCard';
import Layout from '../../components/Layout/Layout';
import MaxWidthWrapper from '../../components/MaxWidthWrapper';
// import { getAllPosts } from '../../lib/notion/notion';

interface BlogProps {
  posts: PostMeta[];
}

const Blog = ({ posts }: BlogProps) => (
  <Layout title="Yuta Development Blog">
    <MaxWidthWrapper>
      <section className="flex flex-col items-center my-5">
        <h1>Blog</h1>
        <p className="text-gray-500 text-center">
          Check out our blog for the latest tips, tricks, and best practices on
          Javascript, React/React Native, AWS and Startups.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
          {posts?.map((post, index) => (
            <BlogCard post={post} key={post.slug} priority={index < 2} />
          ))}
        </div>
      </section>
    </MaxWidthWrapper>
  </Layout>
);

export default Blog;

// export const getStaticProps: GetStaticProps<BlogProps> = async () => ({
//   props: {
//     posts: await getAllPosts({ type: 'Blog' }),
//   },
//   revalidate: 10,
// });
