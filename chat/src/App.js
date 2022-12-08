import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import ChatFeed from "./components/chatFeed/ChatFeed";
import { useState } from "react";
import VideCall from "./components/videocall/VideoCall";
import {BsBell} from "react-icons/bs";
import UserConfig from "./components/userconfig/UserConfig";

import Message from "./components/message/Message";

const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <div className="teste">
        <Sidebar></Sidebar>
        <Tabs>
          <div className="chat-header">
            <div className="user-chat">
              <div
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                className="user-profile"
              ></div>
              <h3>User</h3>
            </div>
            <TabList className={"tablist"}>
              <Tab>
                <div id="chat" className="icon-house">
                  <img src={require("./components/imgs/chat-icon.png")} />
                  <p>Chat</p>
                </div>
              </Tab>

              <Tab>
                <div className="icon-house">
                  <img src={require("./components/imgs/dashboard-icon.png")} />
                  <p>Resumo</p>
                </div>
              </Tab>

              <Tab>
                <div className="icon-house">
                  <img src={require("./components/imgs/contatos.png")} />
                  <p>Contatos</p>
                </div>
              </Tab>

              <Tab>
                <div className="icon-house" id="configuration">
                  <img src={require("./components/imgs/config-icon.png")} />
                  <p>Configurações</p>
                </div>
              </Tab>

              <Tab>
                <div className="icon-house">
                  
                  <img src={require("./components/imgs/bell.png")} />
                </div>
              </Tab>
            </TabList>
            <div className="options-chat">
              <img src={require("./components/imgs/ligar.png")} />
              <img src={require("./components/imgs/anexo.png")} />
            </div>
          </div>

          {isHovering && (
            <div>
              <h2>Only visible when hovering div</h2>
            </div>
          )}

          <div className="body-container">
            
            <TabPanel>
              <ChatFeed/>
              {/* <VideCall/> */}
            </TabPanel>

            <TabPanel>
             2
            </TabPanel>

            <TabPanel>
              <h2> 3</h2>
            </TabPanel>

            <TabPanel>
            <UserConfig/>
            </TabPanel>

            <TabPanel>
              
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
