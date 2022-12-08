import React, { useState, useEffect, useRef }  from "react";
import TesteHover from "../teste/Hover";
import Message from "../message/Message";
import * as SockJS from 'sockjs-client';
import * as Stomp from '@stomp/stompjs';
import api from "../../api";

const ChatFeed = () => {
  const [messageList, setMessageList] = useState([]);
  const [stompClient, setStompClient] = useState()

    function connect() {
      var socket = new SockJS('http://localhost:9090/websocket');
      var stompClient = Stomp.Stomp.over(socket)
      setStompClient(stompClient)
      stompClient.connect({}, function() {
        stompClient.subscribe(`/chatte/reply/${3}`, function (message) {
          console.log(message.body);
          getMessages()
        })
      })
    }

    function getMessages() {
      api.get("/grupos/messages/3").then(res => {
        setMessageList(res.data);
      }).catch(erro => {
        console.log(erro);
      })
    }
    useEffect(() => {
      connect()
      getMessages()
    }, [])

    const sendMessage = (event) => {
      event.preventDefault();
      stompClient.send(`/app/message/${3}`, {}, JSON.stringify({'conteudo': document.getElementById('message').value, 'privado': true, 'fkUsuario': 3, 'fkGrupo': 3}));
    }

  return (
    <div >
      <div className="chat-container">
      <div className="chat-feed">
        {
          messageList.map(message => (
            <Message
              conteudo={message.conteudo}
              nmUsuario={message.nmUsuario}
            ></Message>
          ))
        }
      </div>
      <div className="send-message">
            <textarea id="message" placeholder="Escreva sua mensagem...">
            </textarea>

            <button className="send-button" onClick={sendMessage}></button>
      </div>
    </div>
  </div>
  );
};

export default ChatFeed;
