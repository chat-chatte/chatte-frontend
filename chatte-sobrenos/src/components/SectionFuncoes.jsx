import React from "react";
import check from '../assets/svg/Vector.svg';

function SectionFuncoes () {

    return(

        <>
            <div  id="funcoes">
          <h1 id="textFunc">Funções <br/>
            da <span style={{color: "#FFC200"}}>CHATTE</span></h1>
            <div>
              <div className="checklist">
            <img src={check} alt=""/>
            <h2>Agendas e organização</h2>
              </div>
              <div className="checklist">
            <img src={check} alt=""/>
            <h2>Facilitação de avisos</h2>
              </div> 
            </div>
            <div>
              <div className="checklist">
            <img src={check} alt=""/>
            <h2>Chats de voz, vídeo e texto</h2>
              </div>
              <div className="checklist">
            <img src={check} alt=""/>
            <h2>Grupos organizado</h2>
              </div> 
            </div>

        </div>
        </>

    );

}

export default SectionFuncoes;