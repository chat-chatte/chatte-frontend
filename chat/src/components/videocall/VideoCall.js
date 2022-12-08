import React, { useRef, useState } from "react";
import VideCallUserVideo from "./VideCallUserVideo";
<<<<<<< HEAD
import MicIcon from "../imgs/mic-icon.png";
import VideoIcon from "../imgs/video-cam.png";
=======

>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
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
<<<<<<< HEAD

            <div className="controlls-options">
            <img src={VideoIcon} />
            </div>

            <div className="controlls-options">
            </div>
            <button className="end-call" onClick={leaveCall}>
=======
            <button className="end-call">
>>>>>>> 41bf28c7c5aa127941d2e5ba1de46e523e79679f
                Desligar chamada
            </button>
            <div className="controlls-options">

            </div>

        </div>
      </div>
    </div>
  );
};

export default VideCall;
