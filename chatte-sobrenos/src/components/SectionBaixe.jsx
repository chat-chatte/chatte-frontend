import React from "react";
import imgBaixe from '../assets/img/imgcelular.png';

function SectionBaixe() {
    return(

        <>
            <div id="baixe">
          <div id="containerBaixe">
            <h1 id="textBaixe">BAIXE AGORA</h1>
            <h5 id="textApp">Baixe o aplicativo da CHATTE e comece a usar hoje mesmo!</h5>
            <div id="btnBaixe">
              <div id="ios"> <a href="#">IOS</a></div>
              <div id="android"> <a href="#">ANDROID</a></div>
            </div>
          </div>          
          <img id="imgBaixe" src={imgBaixe} alt=""/>
        </div>
        </>

    );
}

export default SectionBaixe;