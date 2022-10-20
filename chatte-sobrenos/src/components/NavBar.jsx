import React from "react";
import { Link } from "react-router-dom";
// import menuShow from '../assets/js/index';
import logoChatteBranca from '../assets/img/chattelogobranca.png';
import imgMenu from '../assets/img/menu_white_36dp.svg';

function NavBar() {
    return(
        <>            
      <header>
        <nav className="nav-bar">
          <div className="logo">
            <Link to="/"> <img src={logoChatteBranca} alt="Logo"/></Link>
          </div>
          <div className="nav-list">
              <ul>
                  <Link to="/valores" > <li className="nav-item"><a href="#" className="nav-link">Início</a></li> </Link>
                  <Link to="/aprimore" > <li className="nav-item"><a href="#" className="nav-link">Funções</a></li> </Link>
                  <Link to="/landing" > <li className="nav-item"><a href="#" className="nav-link">Comunicação</a></li> </Link>
                  <li className="nav-item"><a href="#" className="nav-link">Salas</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Conheça</a></li>
                  <li className="nav-item"><a href="#" className="nav-link">Baixe Agora</a></li>
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

export default NavBar;