import React from "react";
import styled from "styled-components";
import FeedbackBox from "../Elements/BlogBox";

export default function Feedback() {
  return (
    <Wrapper id="blog">
      <div className="whiteBg">
        <div >
          <HeaderInfo>
            <h1 className="font40 extraBold">Aqui, a comunicação importa</h1>
            <p className="font16">
             Veja as avaliações de nossos clientes
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeedbackBox
                title="Bom"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Valemobi"
               />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeedbackBox
                title="Bom"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Stefa"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <FeedbackBox
                title="Bom"
                text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
                tag="company"
                author="Sptech"
                />
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 20px;
`;
const HeaderInfo = styled.div`
  margin-bottom: 30px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;