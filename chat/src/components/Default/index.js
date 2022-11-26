import React, { useState } from "react";
import * as C from "./styles";
//import { MdMessage } from "react-icons/md";
import Logo from "../logo/logo";
import { MdSend } from "react-icons/md";
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';

const Default = () => {
  const [message, setMessage] = useState("");
  var socket = new SockJS('http://localhost:9090/websocket');

  socket.onopen = function() {
    console.log('open')
  }

  var stompClient = Stomp.Stomp.over(socket);
    stompClient.connect({},
      function (frame) {
        console.log(frame)
        stompClient.subscribe(`/chatte/reply/${3}`, function (message) {
              document.getElementById('mensagens').innerHTML += `${message.body} <br>`
        });
    });

    const handleSendMessage = (event) => {
      event.preventDefault();
      stompClient.send(`/app/message/${3}`, {}, JSON.stringify({'conteudo': message, 'privado': true, 'fkUsuario': 4, 'fkGrupo': 3}));
    };

  return (
    <C.Container>
      <Logo />
      <C.Title>CHATTE</C.Title>
      <C.Info>
        Converse com suas equipes através da CHATTE.
      </C.Info>
      <C.Form onSubmit={handleSendMessage}>
        <C.Input
          placeholder="Mensagem"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend onClick={handleSendMessage} />
      </C.Form>
      <div id="mensagens"></div>
    </C.Container>
  );
};

export default Default;
