import Head from 'next/head'
import styled from '@emotion/styled';
import {InferGetStaticPropsType} from 'next';
import Link from 'next/link';

const List = styled.ol``;
const ListItem = styled.li`
  padding: 8px;
`;


export default function Home({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <List>
        {
          posts.map((post) => (
            <ListItem>
              <Link href="/post/[id]" as={`/post/${post.id}`}>
                {post.title}
              </Link>
            </ListItem>
          ))
        }
      </List>
    </div>
  )
}

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: Post[] = await res.json();

  return {
    props: {
      posts
    }
  }
}