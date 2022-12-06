import React from "react";
import imgNotebook from '../assets/img/imgNotebook.png';

function SectionConheca() {
    return(

        <>
            <div id="conheca">
          <img src={imgNotebook} alt=""/>
          <div id="containerConheca">
            <h1 id="textConheca">CONHEÇA</h1>
            <div id="containerTextConheca">
              <h3>Para empresas que desejam integrar mais suas equipes e 
                usufruir das automações de cargos que oferecemos.</h3>
                <br/>
              <h3>A CHATTE possui funcionalidades para qualquer tamanho e porte de empresa, 
                caso sua empresa tenha plano remoto ou híbrido, 
                a CHATTE irá atender suas necessidades.</h3> 
            </div> 
          </div>
        </div>
        </>

    );
}

export default SectionConheca;