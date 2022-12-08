import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../cadastro/cadastro.css";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [birthday, setDate] = useState("");

  return (
    <div className="container-teste">
      <div className="container-cadastro">
      <img src={require("../imgs/rosa-chatte.png")} />
    

        <div className="input-container">
          <label> Email </label>
          <input className="input-cadastro"></input>
        </div>

        <div className="input-container">
          <label> Senha </label>
          <input className="input-cadastro"></input>
        </div>

        
        <h3>Não possui um cadastro? <a>Cadastrar</a></h3>
        <button className="button-cadastro" >Entrar</button>
      </div>

      <div className="container-bg">
        <h1>CONVERSE, REÚNA E SE ORGANIZE EM UM SÓ LUGAR</h1>
      </div>
    </div>
  );
};

export default Login;
