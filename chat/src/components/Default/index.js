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
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;
