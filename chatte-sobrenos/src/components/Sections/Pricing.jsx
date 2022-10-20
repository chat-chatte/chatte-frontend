import React from "react";
import styled from "styled-components";
// Components
import PricingTable from "../Elements/PricingTable";

export default function Pricing() {
  return (
    <Wrapper id="pricing">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nossos planos</h1>
            <p className="font13">
               Conheça nossos planos e escolha aquele
              <br />
              que se encaixa no perfil da sua empresa
            </p>
          </HeaderInfo>
          <TablesWrapper className="flexSpaceNull">
            <TableBox>
              <PricingTable
                icon="roller"
                price="$29,99/mo"
                title="Starter"
                text="O plano mais básico da chatte"
                offers={[
                  { name: "Chates de voz e texto", cheked: true },
                  { name: "Agendar reuniões", cheked: true },
                  { name: "Controle de agenda", cheked: false },
                  { name: "Grupos por squad", cheked: false },
                  { name: "Controle de cargos", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
 
            <TableBox>
              <PricingTable
                icon="monitor"
                price="$49,99/mo"
                title="Basic"
                text="Feito para médias empras em crescimento."
                offers={[
                  { name: "Chates de voz e texto", cheked: true },
                  { name: "Agendar reuniões", cheked: true },
                  { name: "Controle de agenda", cheked: true },
                  { name: "Grupos por squad", cheked: true },
                  { name: "Controle de cargos", cheked: false },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
            <TableBox>
              <PricingTable
                icon="browser"
                price="$59,99/mo"
                title="Golden"
                text="Pensado em empresas de grande porte"
                offers={[
                  { name: "Chates de voz e texto", cheked: true },
                  { name: "Agendar reuniões", cheked: true },
                  { name: "Controle de agenda", cheked: true },
                  { name: "Grupos por squad", cheked: true },
                  { name: "Controle de cargos", cheked: true },
                ]}
                action={() => alert("clicked")}
              />
            </TableBox>
          </TablesWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 50px 0;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const TablesWrapper = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const TableBox = styled.div`
  width: 31%;
  @media (max-width: 860px) {
    width: 100%;
    max-width: 370px;
    margin: 0 auto
  }
`;





