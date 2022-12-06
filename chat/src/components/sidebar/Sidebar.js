import React from "react";
import "./sidebar.css"
const Sidebar  = () => {
  return (
    <div className="sidebar">
        <input placeholder="Buscar" className="search"></input>
        <h3 id="texto">Conversas</h3>
    <div className="chats-container">
      <div className="chat-conversation">
        <div className="user-profile-chat">

        </div>
        <p>Nome Sobrenome</p>
      </div>
    </div>

    </div>
  )

}

export default Sidebar;