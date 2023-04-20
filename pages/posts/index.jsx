import Heading from "@/components/heading";
import Head from "next/head";
import Link from "next/link";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  if (!data) {
    return { notFound: true };
  }

  return {
    props: { posts: data },
  };
}

const Posts = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Posts</title>
      </Head>
      <Heading text={"Posts list: "} />
      <ul>
        {posts &&
          posts.map((post) => {
            return (
              <li key={post.id}>
                <Link href={`posts/${post.id}`}>{post.title}</Link>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Posts;
