"use client";
// import styled from "styled-components";
import React from "react";
// import Image from "next/image";
// import Link from "next/link";
import { client } from "../../../libs/client";

// SSG
export const getstaticProps = async () => {
  const data = await client.get({ endpoint: "blog" });
  console.log(data);
  return {
    props: {
      blog: data.contents,
    },
  };
};

export default function blog({ blog }) {
  return (
    <div>
      {blog.map((blog) => (
        <li key={blog.id}>
          <a href="">{blog.title}</a>
        </li>
      ))}
    </div>
  );
}
