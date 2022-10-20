import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Services from "../components/Sections/Services";
import Pricing from "../components/Sections/Pricing";
import Footer from "../components/Sections/Footer"
import Feedback from "../components/Sections/Feedback";

export default function Landing() {
  return (
    <>
      <TopNavbar/>
      <Services />
      <Feedback />
      <Pricing />
      <Footer />
    </>
  );
}


