import Head from "next/head";
import { Fragment, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";
import PreLoader from "./PreLoader";

const Layout = ({ children, pageTitle }) => {

  return (
    <Fragment>
      <Head>
        <title>{pageTitle}</title>
      </Head>
    </Fragment>
  );
};
export default Layout;
