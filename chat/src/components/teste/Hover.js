import {useState} from 'react';
import "./hover.css"

const TesteHover = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
<div className="chat-header">
        <div className="user-chat">
          <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="user-profile">

          </div>
              <h3>User</h3>
        </div>

        <div className="options-chat">
        <img src={require('../imgs/ligar.png')} />
        <img src={require('../imgs/anexo.png')} />
        </div>
      </div>
 

        {isHovering && (
          <div>
            <h2>Only visible when hovering div</h2>
          </div>
        )}
      </div>
  );
};

export default TesteHover;
