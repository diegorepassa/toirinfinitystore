import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import Header from "../components/Header";
import { Container, Text, css } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-background-default bg-center bg-cover bg-no-repeat relative">
      <Head>
        <title>Toir Infinity Store</title>
      </Head>
      <div className="h-full w-full backdrop-blur-3xl flex flex-row items-center justify-center">
        <Navbar />
        <div className="h-full w-full relative items-center max-h-full overflow-y-scroll">
          <Carousel />
        </div>
      </div>
    </div>
  );
}
