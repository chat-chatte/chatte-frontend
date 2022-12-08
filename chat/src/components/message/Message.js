import React from "react";
<<<<<<< HEAD

=======
>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f

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