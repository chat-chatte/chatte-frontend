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
                  <Link to="/" > <li className="nav-item"><a href="#" className="nav-link">Inicio</a></li> </Link>
                  <Link to="/valores" > <li className="nav-item"><a href="#" className="nav-link">Nossos valores</a></li> </Link>
                  <Link to="/aprimore" > <li className="nav-item"><a href="#" className="nav-link">Nossa tecnologia</a></li> </Link>
                  <Link to="/somos" > <li className="nav-item"><a href="#" className="nav-link">Quem somos</a></li> </Link>                                    
              </ul>
          </div>
          <Link to="/cadastro" > 
          <div className="login-button">
              <button><a href="#">Cadastro</a></button>
          </div>
          </Link> 
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