import React from "react";
import imgSalas from '../assets/img/team-meeting-online-conference-call-on-laptop 1.png';

function SectionSalas() {

    return(

        <>
            <div id="salas">
          <div id="containerSala">
            <h1>SALAS</h1>
            <h5>Salas é como nós da <span style={{color: "#FFC200"}}>CHATTE</span>  chamamos as conversas sejam elas</h5>
            
            <div id="containerBaixo">
              <div id="squads">
                <h2>SQUADS</h2>
                <h6>Salas criadas com o intuito de unir a squad, 
                  seja um gestor ou um novo estagiário.</h6>
              </div>              
              <div id="privados">
                <h2>PRIVADOS</h2>
                <h6>Salas criadas com o intuito de unir a squad, 
              seja um gestor ou um novo estagiário.</h6>
              </div>
            
            </div>            
          </div>            

          <img src={imgSalas} alt=""/>  


        </div>
        </>

    );

}

export default SectionSalas;