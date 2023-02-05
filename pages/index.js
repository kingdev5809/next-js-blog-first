import Head from "next/head";
import { Categories, PostCard, PostWidget } from "../components";
import { getPosts } from "../services";

// const posts = [
//   {
//     name: "MERN Stack Praktikum",
//     excerpt: "MangoDB, ExpressJS, ReactJS, NodeJS",
//   },
//   { name: "Digital Marketing", excerpt: "ADS, Instagram, Telegram" },
// ];

export default function Home({ posts }) {
  return (
    <div className="container  mx-auto px-10 mb-8  ">
      <Head>
        <title>My Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <div className="lg:sticky relative top-8">
              <PostWidget />
              <Categories />
            </div>
          </div>
        </div>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (
            <div>
            
              <PostCard post={post.node} key={post.node.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const posts = (await getPosts()) || [];

  return {
    props: { posts },
  };
}
