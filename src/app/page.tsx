"use client";
import Head from "next/head";
// import Image from "next/image";
// import styles from "./page.module.css";
// import styled from "styled-components";
import Main from "./Main/main";
import Footer from "./Footer/footer";
import Header from "./Header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
