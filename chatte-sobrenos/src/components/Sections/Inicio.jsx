import react from "react";
import styled from "styled-components";
import background from "../../assets/img/imageBg.png";

export default function Inicio() {

    return(
        <ContainerBox>
            <div className="bgInicio" style={{backgroundImage: `url(${background})`}}>
                <TextH1 className="textColor">
                    CHATTE 
                </TextH1>
                <TextContainer className="">
                Tenha mais comunicação com seus colegas de trabalho, de uma forma mais flúida e bem mais consistente
                </TextContainer>
            </div>
        </ContainerBox>
    );

}


const ContainerBox = styled.div `
    width: 100%;
    height: 100%;
    padding-top: 20px;
`

const TextH1 = styled.h1 `
    font-size: 48px;
    
`

const TextContainer = styled.div `
    font-size: 24px;
`