import React from "react";
import VideCallUserVideo from "./VideCallUserVideo";
const VideCall = () => {
  return (
    <div>
      <div className="video-call-container">
        <VideCallUserVideo></VideCallUserVideo>

        <div className="controlls">
            <div className="controlls-options">

            </div>

            <div className="controlls-options">

            </div>

            <div className="controlls-options">
            </div>
            <button className="end-call">
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
