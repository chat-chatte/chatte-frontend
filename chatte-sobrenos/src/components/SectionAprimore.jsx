import react from "react";
import check from '../assets/svg/Vector.svg';

function SectionAprimore () {
    return(

        <>
            <div id="aprimore">
            <div id="textMeio">
                <h1>Aprimore sua comunicação</h1>
                <h5 id="livrese">Livre-se de inconstencia, problemas técnicos e complicações desnecessárias, venha para a CHATTE</h5>
            </div>
            <div id="textAprimore">
                <div id="box">
                    <h1>Chats com segurança</h1>
                    <h5>Crie chats com suas regras, suas limitações e defina as 
                        alçadas que poderão ter acesso a este chat.</h5>
                </div>
                <div id="box">
                    <h1 id="plano">Plano empresa</h1>
                    <h5 id="plano">Um plano que se adequa ao tamanho da sua empresa 
                        de acordo com o número de funcionários.</h5>
                </div>
                <div id="box">
                    <h1>Ajude seus colaboradores</h1>
                    <h5>Uma plataforma que ajuda seus colaboradores a se ajudarem, novo na empresa? 
                        Sem problemas! Te mostramos com quem falar!</h5>
                </div>
            </div>
            <div id="btnSaiba">
                <a href="#">Saiba mais sobre a <span style={{color: "#FFC200"}}>CHATTE</span></a>
            </div>
          </div>

          <div id="adicionar">
            <h1>Adicionar a <span style={{color: "#FFC200"}}>CHATTE</span>
                a sua empresa é fácil</h1>
                <div id="listPassos">
                    <ul style={{listStyle: "none"}}>
                        <li > <img src={check} alt=""/>Passo</li>
                        <li > <img src={check} alt=""/>Passo</li>
                        <li > <img src={check} alt=""/>Passo</li>
                        <li > <img src={check} alt=""/>Passo</li>
                      </ul> 
                </div>
                <div id="btnAdicione">
                    <a href="">Adicione a CHATTE ao seu negócio</a>
                </div>
          </div>

          <div id="perguntas">
            <h1>Perguntas Frequentes</h1>
            <div id="caixaPerguntas"></div>
            <div id="caixaPerguntas"></div>
            <div id="caixaPerguntas"></div>
            <div id="caixaPerguntas"></div>
          </div>
        </>

    );
}

export default SectionAprimore;