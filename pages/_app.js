import 'bootstrap/dist/css/bootstrap.css';
import "./../assets/css/style.css";
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import Header from '@/partials/Header';
import Footer from '@/partials/Footer';
export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
    
      <Header />
      
      <Component {...pageProps} />
      
      <Footer />
    </>
  )
}