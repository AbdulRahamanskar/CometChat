import React from "react";
import Navheader from "./components/Navheader";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Layout from "./components/Layout";
import TheBenfits from "./components/Thebenfits";
import OurPrograms from "./components/OurPrograms";
import FAQs from "./components/FAQs";
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";
import WebFooter from "./components/WebFooter";

const App = () => {
  return (
    <>
      <div className="scrollbar-hide overflow-hidden scrollbar-hide">
        <Hero />
        <TheBenfits />
        <OurPrograms />
        <FAQs />
        <PreFooter />
        <Footer />
        {/* <WebFooter/> */}
      </div>
    </>
  );
};

export default App;
