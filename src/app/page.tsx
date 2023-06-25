"use client";
import Head from "next/head";
// import Image from "next/image";
// import styles from "./page.module.css";
// import styled from "styled-components";
import Main from "../components/main/main";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
