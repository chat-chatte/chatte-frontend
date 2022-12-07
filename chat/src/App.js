import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./style.css";
import Sidebar from "./components/sidebar/Sidebar";
import ChatFeed from "./components/chatFeed/ChatFeed";

const App = () => {
  return (
    <div>
    
      <Tabs>
        <div className="container">
          <div className="company-name">
            <h1>CHATTE</h1>
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
              <div className="icon-house" >
                <img src={require("./components/imgs/bell.png")} />
              </div>
            </Tab>
          </TabList>
        </div>
        <div className="body-container">
          <Sidebar></Sidebar>
          <TabPanel>
            <ChatFeed />
          </TabPanel>

          <TabPanel>
            <h2> 2</h2>
          </TabPanel>

          <TabPanel>
            <h2> 3</h2>
          </TabPanel>

          <TabPanel>
            <h2> 4</h2>
          </TabPanel>

          <TabPanel>
            <h2> 5</h2>
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default App;
