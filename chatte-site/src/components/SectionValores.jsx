import react from "react";

import logoChattePreta from '../assets/img/logochattepreta.png';


function SectionValores () {

    return(

        <>
            <div className="valores">
            <div className="nossos-valores">
                <h1>Nossos valores</h1>
            </div>
            <div className="textValores">
                <div className="box">
                    <h1 className="enfase">Comunicação</h1>
                    <h5>Nós da CHATTE acreditamos que não existe um trabalho em equipe sem uma boa comunicação
                        e não existe um bom trabalho sem uma boa equipe.
                    </h5>
                </div>
                <div className="box">
                    <h1 className="enfase">Simplicidade</h1>
                    <h5 >Chega de preocupações e perguntar seguidas vezes "como faço isso", na CHATTE deixamos tudo
                    o mais simples e intuitivo possível.
                    </h5>
                </div>
                <div className="box">
                    <h1 className="enfase">Integraçãoi</h1>
                    <h5>Uma plataforma que ajuda seus colaboradores a se ajudarem, novo na empresa? 
                        Sem problemas! Te mostramos com quem falar!</h5>
                </div>
            </div>   

          </div>
          <div className="valores">
            <div className="nossos-valores">
                <h1>Como isso funciona?</h1>
            </div>
            <div className="textValores">
                <div className="box">
                    <h1 id="destaque">1º</h1>
                    <h5>A empresa entra encontra o plano que mais faz sentido para ela.
                    </h5>
                </div>
                <div className="box">
                    <h1 id="destaque">2º</h1>
                    <h5>Após contratar a CHATTE entra em contato e disponibiliza um canal para atendimento e dúvidas
                    </h5>
                </div>
                <div className="box">
                    <h1 id="pronto">Pronto!</h1>
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