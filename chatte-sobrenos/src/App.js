import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Indexpg from "./screens/Index.jsx";
// Screens
import Somos from "./screens/Somos.jsx";
import Valores from "./screens/Valores.jsx";
import Aprimore from "./screens/Aprimore.jsx";
import Index from "./screens/Index.jsx";
import Login from "./screens/Login.jsx";
import Cadastro from "./screens/Cadastro.jsx";
import './style/aprimore.css';


export default function App() {
  return (
    <Router>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>

      <Routes>

          <Route exact path="/" element= {<Index/>}/>
          <Route exact path="/valores" element= {<Valores/>}/>
          <Route exact path="/aprimore" element= {<Aprimore/>}/>
          <Route exact path="/somos" element= {<Somos/>}/>
          <Route exact path="/login" element= {<Login/>}/>
          <Route exact path="/cadastro" element= {<Cadastro/>}/>

      </Routes>
    </Router>
  );
}

