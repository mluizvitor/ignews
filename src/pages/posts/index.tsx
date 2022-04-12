import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPrismicClient } from '../../services/prismic';
import Prismic from '@prismicio/client';
import styles from  './styles.module.scss';

import { RichText } from 'prismic-dom';

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string
}
interface PostsProps {
  posts: Post[]
}

export default function Posts({posts}: PostsProps) {
  return(
    <>
      <Head>
        <title>Posts · ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map(post => {
            return (
              <a key={post.slug} href="#">
                <time>{post.updatedAt}</time>

                <strong>{post.title}</strong>

                <p>{post.excerpt}</p>
              </a>
            );
          })}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const response = await prismic.query<any>(
    Prismic.predicates.at('document.type', 'post'),
    {
      fetch: ['Post.title', 'Post.content'],
      pageSize: 10,
    }
  );
  
  const posts = response.results.map((post) => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      excerpt: RichText.asText(post.data.subtitle) || post.data.content.find(content => content.type === 'paragraph')?.text || '',
      updatedAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
    };
  });

  return { 
    props: {
      posts
    }
  };
};