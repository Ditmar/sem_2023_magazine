import React, { useState } from 'react'; 
import { GoPaperclip } from "react-icons/go";
import { FaRegFilePdf, FaFacebook, FaTelegram, FaWhatsapp } from 'react-icons/fa6';

const ButtonComponent = () => { 
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prevMenuVisible) => !prevMenuVisible);
  };

  return (
    <div className="buttons flex justify-end ">
      <div className="pdf">
        <button className="sharebutton"  >
          <span className="iconbutton">
            <a href="#" className="btn" type="button">
              <FaRegFilePdf color="#178435" size={30} />
            </a>
          </span>
          <span className="touchriplee"></span>
        </button>
      </div>
      <div className="share">
        <button className="sharebutton" onClick={toggleMenu}>
          <span className="iconbutton">
            <GoPaperclip color="#178435" size={30} />
          </span>
          <span className="touchriplee"></span>
        </button>
        <div className={`share-menu ${menuVisible ? 'visible' : ''}`}>
          <div className="menu">
            <a href="#" className="icon">
              <FaWhatsapp color="#ffffff" size={30} />
            </a>
            <a href="#" className="icon">
              <FaFacebook color="#ffffff" size={30} />
            </a>
            <a href="#" className="icon">
              <FaTelegram color="#ffffff" size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonComponent;  
