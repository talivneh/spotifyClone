import { getSession } from "next-auth/react";
import Head from "next/head";
import { useEffect } from "react";
import Center from "../components/Center";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

export default function Home() {
  useEffect(() => {
    alert(
      "Open Your Real Spotify App In Your Device And Start Manipulate It From This Clone :)"
    );
  }, []);

  return (
    <div className="bg-black h-screen overflow-hidden">
      <Head>
        <title>Spotify clone -Tal Livneh</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex">
        <Sidebar />
        <Center />
      </main>

      <div className="sticky bottom-0">
        <Player />
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
