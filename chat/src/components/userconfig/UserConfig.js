import React from "react";
const UserConfig = () => {
  return (
    <div>
      <div className="config-container">
        <h1 id="aviso-h1" className="aviso">Meu perfil</h1>
        <p className="aviso">Configure informações do perfil</p>
        <div className="photo-change">
          <div className="container-edit">
            <div id="edit-user-profile-photo" className="user-profile"></div>
            <div className="buttons-profile">
              <button id="change-photo" className="button-profile-edit">
                Alterar foto
              </button>
              <button className="button-profile-edit">Remover foto</button>
            </div>
          </div>
          <div className="disclaimer">
            <p>
              Essa foto será exibida para todos os usuários que você conversar
            </p>
          </div>
        </div>
 

          


        <div className="informacoes">
          <h3>Informações pessoais</h3>
          <div className="display-social">
            <div className="social-img">
            <img src={require("../imgs/mail.png")} />
            </div>
            <input placeholder="E-mail para contato" className="search"></input>
            <button className="change-btn">Alterar</button>
          </div>

          <h3>⠀⠀</h3>
          <div className="display-social">
            <div className="social-img">
            <img src={require("../imgs/ligar.png")} />
            </div>
            <input placeholder="Telefone pessoal" className="search"></input>
            <button className="change-btn">Alterar</button>
          </div>

          <h3 id="redes">Redes Sociais</h3>
          <div className="display-social">
            <div className="social-img">
              in
            </div>
            <input placeholder="LinkedIn" className="search"></input>
            <button className="change-btn">Alterar</button>
          </div>
        </div>
    

      </div>
    </div>
  );
};

export default UserConfig;
