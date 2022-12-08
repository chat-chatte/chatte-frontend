import React, { useRef, useState } from "react";
import VideCallUserVideo from "./VideCallUserVideo";
import MicIcon from "../imgs/mic-icon.png";
import VideoIcon from "../imgs/video-cam.png";
const VideCall = () => {

  const [ callEnded, setCallEnded] = useState(false)
  const connectionRef= useRef()
  const leaveCall = () => {
		setCallEnded(true)
		connectionRef.current.remove()
	}

  return (
    
    <div>
      <div className="video-call-container">
        <VideCallUserVideo></VideCallUserVideo>
        <VideCallUserVideo></VideCallUserVideo>

        <div className="controlls">
            <div className="controlls-options">
              <img src={MicIcon} />
            </div>

            <div className="controlls-options">
            <img src={VideoIcon} />
            </div>

            <div className="controlls-options">
            </div>
            <button className="end-call" onClick={leaveCall}>
                Desligar chamada
            </button>

            <div className="controlls-options">

            </div>

            <div className="controlls-options">

            </div>

            <div className="controlls-options">

            </div>
        </div>
      </div>
    </div>
  );
};

export default VideCall;
