import React from "react";
import check from '../assets/svg/Vector.svg';

function SectionFuncoes () {

    return(

        <>
            <div  id="funcoes">
          <h1 id="textFunc">Funções
            da <span style={{color: "#FFC200"}}>CHATTE</span></h1>
            <div id="listFuncoesDir">
              <ul style={{listStyle: "none"}}>
                <li > <img src={check} alt=""/>Agendas e organização</li>
                <li > <img src={check} alt=""/>Facilitação de avisos</li>
              </ul>              
            </div>
            <div id="listFuncoesEsq">
              <ul style={{listStyle: "none"}}>
                <li > <img src={check} alt=""/>Chats de voz, vídeo e texto</li>
                <li > <img src={check} alt=""/>Grupos organizados</li>
              </ul>
            </div>
        </div>
        </>

    );

}

export default SectionFuncoes;