import React from "react";
import UserSidebar from "../user-sidebar/UserSidebar";

const Sidebar  = () => {
  return (
    <div className="sidebar">
        <input placeholder="Buscar" className="search"></input>
        <span className="addjust-group"> <h3>Conversas</h3> </span>
    <div className="chats-container">
      <UserSidebar></UserSidebar>
    </div>

    <span className="addjust-group"> <h3>Grupos</h3> <button>+</button> </span>
    <div className="chats-container">
      <UserSidebar></UserSidebar>
    </div>

    </div>
  )

}

export default Sidebar;