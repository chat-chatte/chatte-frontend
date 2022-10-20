import React from "react";
// import menuShow from '../assets/js/index';
import logoChatteBranca from '../assets/img/chattelogobranca.png';
import imgMenu from '../assets/img/menu_white_36dp.svg';
import imgBg from '../assets/img/image bg.png';
import { Link } from "react-router-dom";

function NavBarIndex() {
    return(
        <>
            <div id="imgBg">
        <img src={imgBg} alt=""/>
      </div> 
      <header>
        <nav className="nav-bar">
          <div className="logo">
          <Link to="/"> <img src={logoChatteBranca} alt="Logo"/></Link>
          </div>
          <div className="nav-list">
              <ul>
                  <Link to="/" > <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li> </Link>
                  <Link to="/valores" > <li className="nav-item"><a href="#" className="nav-link">Valores</a></li> </Link>
                  <Link to="/aprimore" > <li className="nav-item"><a href="#" className="nav-link">Aprimore</a></li> </Link>
                  <Link to="/somos" > <li className="nav-item"><a href="#" className="nav-link">Quem somos</a></li> </Link>                  
                  <Link to="/login" > <li className="nav-item"><a href="#" className="nav-link">Faça seu Login</a></li> </Link>                  
                  <Link to="/cadastro" > <li className="nav-item"><a href="#" className="nav-link">Cadastro</a></li> </Link>                    
              </ul>
          </div>
          <div className="login-button">
              <button><a href="#">Fale Conosco</a></button>
          </div>
  
          <div className="mobile-menu">
            <ul>
              <li className="nav-item"><a href="#" className="nav-link">Início</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Funções</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Comunicação</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Salas</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Conheça</a></li>
              <li className="nav-item"><a href="#" className="nav-link">Baixe Agora</a></li>
            </ul>
  
            <div className="login-button">
                <button><a href="#">Fale Conosco</a></button>
            </div>

            <div className="mobile-menu-icon">
                <button className="btnMobile"><img className="icon" src={imgMenu} alt=""/></button>
            </div>
        </div>
      </nav>
      </header>
        </>
    );
}

export default NavBarIndex;