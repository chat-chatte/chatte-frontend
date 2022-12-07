import React from "react";
import TesteHover from "../teste/Hover";
import Message from "../message/Message";
import "./chat.css"
const ChatFeed = () => {
  return (
    <div className="chat-container">
        <TesteHover></TesteHover>
      <div className="chat-feed">
      <Message></Message>
      </div>
      <div className="send-message">
          <textarea placeholder="Escreva sua mensagem...">
            
          </textarea>
          <button className="send-button"></button>
      </div>
    </div>
  )

}

export default ChatFeed;