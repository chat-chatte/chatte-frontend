import React from "react";
import * as C from "./styles";
//import { MdMessage } from "react-icons/md";
import Logo from "../logo/logo";

const Default = () => {
  return (
    <C.Container>
      <Logo />
      <C.Title>CHATTE</C.Title>
      <C.Info>
        Converse com suas equipes através da CHATTE.
      </C.Info>
    </C.Container>
  );
};

export default Default;
