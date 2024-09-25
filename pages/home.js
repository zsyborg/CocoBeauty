import { useEffect } from "react";
import Collection from "../src/components/Collection";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import Segmentor from "../src/components/Segmentor";
import Image from "next/image";


const Home = () => {
  // useEffect(() => {
  //   return () => {
  //     heroSlider2();
  //   };
  // }, []);
  return (
    <div>

    <Layout pageTitle={"Coconut Beauty - Home"}>
    </Layout>
      <Header/>
      <Segmentor/>
    </div>
  );
};
export default Home;
