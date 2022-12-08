import React, { useState, useEffect } from "react";
import api from "../../api";
import Message from "../message/Message";
const ListarTodos = (props) => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        api.get("/usuarios").then(res => {
            setUserList(res.data);
          }).catch(erro => {
            console.log(erro);
          })
      }, [])


    return (
        <div>
            <div className="listarTodos-container">
                {
                    userList.map(user => (
                        <Message
                            conteudo={user.nome}
                            nmUsuario={user.email}
                        >
                        </Message>
                    ))
                }
            </div>        

        </div>
    )
}

export default ListarTodos;