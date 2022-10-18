import React from "react";
import { Helmet } from "react-helmet";
import Index from "./screens/Index.jsx";
// import Indexpg from "./screens/Index.jsx";
// Screens
import Landing from "./screens/Landing.jsx";
import Valores from "./screens/Valores.jsx";
import Aprimore from "./screens/Aprimore.jsx";

export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Valores/>
    </>
  );
}

