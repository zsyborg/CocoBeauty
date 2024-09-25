import { useEffect } from "react";
import Layout from "../src/layout/Layout";
import Intro from "../src/components/Intro";
import Image from "next/image";
const Index = () => {
  // useEffect(() => {
  //   return () => {
  //     heroSlider2();
  //     Intro();
  //   };
  // }, []);
  return (
    <div>
    <Layout pageTitle={"Coconut Beauty - Hair, Skin & You"}>
    </Layout>
      <Intro/>
      asa
    </div>
  );
};
export default Index;
