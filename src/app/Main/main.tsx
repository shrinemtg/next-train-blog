// "use client";
// clientのインポート
import { client } from "../../../libs/client";
// import React from "react";
// import styled from "styled-components";
// import Image from "next/image";
// import Link from "next/link";
import parse from "html-react-parser";

type Blogs = {
  contents: [
    {
      body: string;
      createdAt: string;
      // id: string;
      // publishedAt: string;
      // revisedAt: string;
      title: string;
      // updatedAt: string;
    }
  ];
  totalCount: number;
  offset: number;
  limit: number;
};

async function getData() {
  const res = await client.get({
    endpoint: "blog",
  });
  console.log(res);

  return res;
  // return res as Blogs;
}

export default async function Home() {
  // 　const data = await getData()
  const blogs = await getData();

  return (
    <>
      <div>{blogs.contents[0].title}</div>
      <div>{blogs.contents[0].createdAt}</div>
      <div>{blogs.contents[0].publishedAt}</div>
      {/* <div>{blogs.contents[0].createdAt}</div> */}
      <div>{parse(blogs.contents[0].body)}</div>
    </>
  );
}

// "use client";
// // import styled from "styled-components";
// import React from "react";
// // import Image from "next/image";
// // import Link from "next/link";
// import { client } from "../../../libs/client";

// // SSG
// export const getstaticProps = async () => {
//   const data = await client.get({ endpoint: "blog" });
//   console.log(date);
//   return {
//     props: {
//       blog: data.contents,
//     },
//   };
// };

// export default function blog({ blogs }) {
//   return (
//     <div>
//       {blogs.map((blog) => (
//         <li key={blog.id}>
//           {" "}
//           <a href="">{blog.title}</a>{" "}
//         </li>
//       ))}
//     </div>
//   );
// }
