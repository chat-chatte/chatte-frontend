import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets

export default function Services() {
  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Somos a CHATTE</h1>
            <p className="font16 extraBold">
            Uma empresa que visa e valoriza a comunicação.
            </p>
            <p className="font13">
            A CHATTE tem como principal objetivo auxiliar as empresas a inserir seus nvoos colaboradores às equipes de uma forma mais simples, direta e automática.
            </p>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                title="Chates de equipes"
                subtitle="Crie quantos chats quiser de acordo com a sua regra de negócio!"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                title="Chates de equipes"
                subtitle="Crie quantos chats quiser de acordo com a sua regra de negócio!"
              />
            </ServiceBoxWrapper>   
            <ServiceBoxWrapper>
              <ServiceBox
                title="Chates de equipes"
                subtitle="Crie quantos chats quiser de acordo com a sua regra de negócio!"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                title="Chates de equipes"
                subtitle="Crie quantos chats quiser de acordo com a sua regra de negócio!"
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  margin-top: 50px;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 30%;
  color: white;
  margin-top: 30px;
  background-color: #2C2C2C;
  height: 160px;
  border-radius: 5px;
  margin-right: 5%;
  padding: 20px;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;