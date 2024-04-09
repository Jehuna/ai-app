"use client";
import Head from "next/head";
import ImageGenerator from "./components/ImageGenerator"; 
import { ImageProvider } from "./context/ImageContext"; 
import type { NextPage } from "next"; // Importing NextPage type

const Home: NextPage = () => {
  return (
    <ImageProvider>
      <>
        <Head>
          <title>AI Image Generator</title>
          <meta name="description" content="Generate images with AI" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <ImageGenerator />
        </main>
      </>
    </ImageProvider>
  );
};

export default Home;
