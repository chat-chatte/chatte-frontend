import React from "react";
import "./mensagem.css"

const Message = (props) => {
  return (
    <div>
    <div className="message-container">
       <h3>
          {
            props.nmUsuario
          }
       </h3>
    <p>
      {
        props.conteudo
      }
    </p>
    </div>
    </div>
  )

}

export default Message;