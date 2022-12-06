import React from "react";
import "./chat.css"
const ChatFeed = () => {
  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="user-chat">
          <div className="user-profile">

          </div>
              <h3>User</h3>
        </div>

        <div className="options-chat">
        <img src={require('../imgs/ligar.png')} />
        <img src={require('../imgs/anexo.png')} />
        </div>
      </div>
      <div className="chat-feed">

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