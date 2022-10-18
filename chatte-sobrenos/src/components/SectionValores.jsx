import react from "react";

import logoChattePreta from '../assets/img/logochattepreta.png';


function SectionValores () {

    return(

        <>
            <div id="valores">
            <div id="textMeio">
                <h1>Nossos valores</h1>
            </div>
            <div id="textValores">
                <div id="box">
                    <h1>VALORES1</h1>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                </div>
                <div id="box">
                    <h1 id="plano">VALORES2</h1>
                    <h5 id="plano">All the Lorem Ipsum generators on the Internet tend to repeat,
                        All the Lorem Ipsum generators on the Internet tend to repeat 
                    </h5>
                </div>
                <div id="box">
                    <h1>VALORES3</h1>
                    <h5>Uma plataforma que ajuda seus colaboradores a se ajudarem, novo na empresa? 
                        Sem problemas! Te mostramos com quem falar!</h5>
                </div>
            </div>        
          </div>
    
          <div id="funciona">
            <div id="funcionaMeio">
                <h1>Como funciona?</h1>
            </div>
            <div id="textFunciona">
                <div id="box">
                    <h1><span >FUNCIONA1</span></h1>
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </h5>
                </div>
                <div id="box">
                    <h1 id="plano">VALORES2</h1>
                    <h5 id="plano">All the Lorem Ipsum generators on the Internet tend to repeat,
                        All the Lorem Ipsum generators on the Internet tend to repeat 
                    </h5>
                </div>
                <div id="box">
                    <h1>VALORES3</h1>
                    <h5>Uma plataforma que ajuda seus colaboradores a se ajudarem, novo na empresa? 
                        Sem problemas! Te mostramos com quem falar!</h5>
                </div>
            </div>    
            

          </div>
          <div id="baixo">              
              <div id="imgLogoPreta">
                  <img src={logoChattePreta}alt=""/>
                </div>
              <div id="containerFinal">   
                    <h1>All the Lorem Ipsum generators on the Internet tend to repeat,
                        All the Lorem Ipsum generators on the Internet tend to repeat </h1>             
                  <div id="btnCadastrar">Cadastre-se agora</div>                  
                    <h5>Dúvidas?</h5>
                  <h6>Caso ainda tenha alguma dúvida acesse nosso FAQ e Suporte.</h6>                  
              </div>
          </div>
        </>

    );

}

export default SectionValores;