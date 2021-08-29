import Article from '@components/Article';
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import type {Post} from '../index';

function BlogPost({post}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </Article>
  )
}

export default BlogPost;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();
  const paths = posts.map(post => ({params: {id: String(post.id)}}));

  return {paths, fallback: false};
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);
  const post: Post = await res.json();

  return {
    props: {post}
  }
}
