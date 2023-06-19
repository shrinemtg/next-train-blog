"use client";
import Head from "next/head";
// import Image from "next/image";
// import styles from "./page.module.css";
// import styled from "styled-components";
import Main from "./Components/Main/main";
import Footer from "./Components/Footer/footer";
import Header from "./Components/Header/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
