import React from "react";
import imgComunicacao from '../assets/img/imgcomunicao.png';

function SectionComunicacao () {

    return(

        <>
            <div id="comunicacao">
          <img src={imgComunicacao} alt=""/>
          <div id="containerComunicacao">
            <h1 id="textComunicacao">COMUNICAÇÃO É CRUCIAL</h1>
            <h5>A CHATTE tem como principal objetivo facilitar a 
              comunicação entre pessoas e equipes.</h5>
          </div>
        </div>
        </>

    );

} 

export default SectionComunicacao;