import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../cadastro/cadastro.css";
import api from '../../api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "../login/Login";

const Cadastro = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [birthday, setDate] = useState("");

  function cadastrar(evento){
    evento.preventDefault();
    
    const novoUsuario = {
        nome: name,
        email: email,
        birthday: birthday,
        password: password,
        cargo: cargo,
        empresa: empresa
    }

    api.post(`/usuarios/cadastro`, novoUsuario)
  }

  return (
    <div className="container-teste">
      <form className="container-cadastro" onSubmit={cadastrar}>
      <img src={require("../imgs/rosa-chatte.png")} />
        <div className="input-container">
          <label> Nome </label>
          <input className="input-cadastro" onChange={(e) => setName(e.target.value)}></input>
          
        </div>

        <div className="input-container">
          <label> Email </label>
          <input className="input-cadastro" onChange={(e) => setEmail(e.target.value)}></input>
        </div>

        <div className="input-container">
          <label> Senha </label>
          <input className="input-cadastro" onChange={(e) => setPassword(e.target.value)}></input>
        </div>

        <div className="input-container">
          <label> Cargo </label>
          <input className="input-cadastro" onChange={(e) => setCargo(e.target.value)}></input>
        </div>

        <div className="input-container">
          <label> Empresa </label>
          <input className="input-cadastro" onChange={(e) => setEmpresa(e.target.value)}></input>
        </div>

        <div className="input-container">
          <label> Data nascimento </label>
          <input type="date" className="input-cadastro" onChange={(e) => setDate(e.target.value)}></input>
        </div>
        <h3>Já possui um cadastro? <a>Login</a></h3>
                <button className="button-cadastro" type="submit" onClick={() => cadastrar}>Cadastrar</button>

      </form>

      <div className="container-bg">
        <h1>CONVERSE, REÚNA E SE ORGANIZE EM UM SÓ LUGAR</h1>
      </div>
    </div>
  );
};

export default Cadastro;
