"use client";
import React, { useEffect } from "react";
import { News_Cycle } from "next/font/google";
import 'swiper/css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import BackTop from "@/components/backtotop";
import LoadingScreen from "@/components/loader";

const newsCycle = News_Cycle( {
  subsets: [ "latin" ],
  weight: [ "400", "700" ],
} );

export default function RootLayout ( { children } ) {
  useEffect( () => {
    Aos.init( { duration: 1000 } );
  }, [] );

  const [ loading, setLoading ] = React.useState( false );

  React.useEffect( () => {
    setTimeout( () => setLoading( true ), 6000 );
  }, [] );

  return (
    <html lang="en">
      <title>MohonMart</title>
      <body className={ newsCycle.className }>
        { loading ? (
          <React.Fragment>
            <Header />
            { children }
            <BackTop />
            <Footer />
          </React.Fragment>
        ) : (
          <LoadingScreen />
        ) }

      </body>
    </html>
  );
}
