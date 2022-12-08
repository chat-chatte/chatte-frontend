import React from "react";
import { useEffect, useRef, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Peer from "simple-peer"
import io from "socket.io-client"
import "./style.css";


import Sidebar from "./components/sidebar/Sidebar";
import ChatFeed from "./components/chatFeed/ChatFeed";
import VideCall from "./components/videocall/VideoCall";
import {BsBell} from "react-icons/bs";
import UserConfig from "./components/userconfig/UserConfig";

import Upload from "./components/upload/Upload";

const socket = io.connect('http://localhost:5000')
const App = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  // FUNCIONAMENTO DO VIDEO
  const [ me, setMe ] = useState("")
	const [ stream, setStream ] = useState()
	const [ receivingCall, setReceivingCall ] = useState(false)
	const [ caller, setCaller ] = useState("")
	const [ callerSignal, setCallerSignal ] = useState()
	const [ callAccepted, setCallAccepted ] = useState(false)
	const [ idToCall, setIdToCall ] = useState("")
	const [ callEnded, setCallEnded] = useState(false)
	const [ name, setName ] = useState("")
	const myVideo = useRef()
	const userVideo = useRef()
	const connectionRef= useRef()

  useEffect(() => {
		navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((stream) => {
			setStream(stream)
				myVideo.current.srcObject = stream
		})

	socket.on("me", (id) => {
			setMe(id)
		})

		socket.on("callUser", (data) => {
			setReceivingCall(true)
			setCaller(data.from)
			setName(data.name)
			setCallerSignal(data.signal)
		})
	}, [])

	const callUser = (id) => {
		const peer = new Peer({
			initiator: true,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("callUser", {
				userToCall: id,
				signalData: data,
				from: me,
				name: name
			})
		})
		peer.on("stream", (stream) => {
			
				userVideo.current.srcObject = stream
			
		})
		socket.on("callAccepted", (signal) => {
			setCallAccepted(true)
			peer.signal(signal)
		})

		connectionRef.current = peer
	}

	const answerCall =() =>  {
		setCallAccepted(true)
		const peer = new Peer({
			initiator: false,
			trickle: false,
			stream: stream
		})
		peer.on("signal", (data) => {
			socket.emit("answerCall", { signal: data, to: caller })
		})
		peer.on("stream", (stream) => {
			userVideo.current.srcObject = stream
		})

		peer.signal(callerSignal)
		connectionRef.current = peer
	}

	const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.destroy()
	}

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
<<<<<<< HEAD
                <div className="icon-house" id="bell">
=======
                <div className="icon-house">
                  
>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
                  <img src={require("./components/imgs/bell.png")} />
                </div>
              </Tab>

              <Tab>
<<<<<<< HEAD
                <div className="options-chat" id="phone">
                <img src={require("./components/imgs/ligar.png")} />
                </div>
              </Tab>
              
              <Tab>
                <div className="options-chat" id="attachment">
                <img  src={require("./components/imgs/anexo.png")} />
=======
                <div className="icon-house" id="configuration">
                  <p>Cadastro via arquivo</p>
>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
                </div>
              </Tab>

            </TabList>
            <div className="options-chat">
              
              
            </div>
          </div>

          {isHovering && (
            <div>
              <h2>Only visible when hovering div</h2>
            </div>
          )}

          <div className="body-container">
            
            <TabPanel>
<<<<<<< HEAD
              <ChatFeed></ChatFeed>
            </TabPanel>

            <TabPanel>
              <h2> 2</h2>
=======
              <ChatFeed/>
              {/* <VideCall/> */}
            </TabPanel>

            <TabPanel>
             2
>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
            </TabPanel>

            <TabPanel>
              <h2> 3</h2>
            </TabPanel>

            <TabPanel>
            <UserConfig/>
            </TabPanel>

            <TabPanel>
              
            </TabPanel>
<<<<<<< HEAD

            <TabPanel>
              <VideCall>

              </VideCall>
            </TabPanel>

            <TabPanel>
              <h2> 7</h2>
            </TabPanel>
=======
       
            <TabPanel>
              <Upload></Upload>
            </TabPanel>

>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default App;
