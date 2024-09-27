import { useEffect } from "react";
import Collection from "../src/components/Collection";
import Header from "../src/layout/Header";
import Layout from "../src/layout/Layout";
import ShopKeeper from "../src/components/ShopKeeper";
import Image from "next/image";
import Footer from "../src/layout/Footer";

const Shop = () => {
  // useEffect(() => {
  //   return () => {
  //     heroSlider2();
  //   };
  // }, []);
  return (
    <div>

    <Layout pageTitle={"Coconut Beauty - Shop"}>
    </Layout>
      <Header/>
      <ShopKeeper/>
      <Footer/>
    </div>
  );
};
export default Shop;
