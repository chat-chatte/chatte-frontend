import React from "react";
import Message from "../message/Message";
const ChatFeed = () => {
  return (
    <div >
      <div className="chat-container">
      <div className="chat-feed">
        <Message></Message>
      </div>

      </div>
      <div className="send-message">
        <textarea placeholder="Escreva sua mensagem..."></textarea>
        <button className="send-button"></button>
      </div>
    </div>
  );
};

export default ChatFeed;
