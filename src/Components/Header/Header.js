import React from "react";
import { HeaderStyle } from "./HeaderStyle";

const Header = ({ textButton, textLink, functionButton, functionLink}) => {



  return (
    <HeaderStyle>
      {textLink && <a onClick={functionLink} href="javascript:void(0)">{textLink}</a>}
      <img
        src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
        height="60px"></img>
      {textButton && <button onClick={functionButton} >{textButton}</button>} 
    </HeaderStyle>
  );
};

export default Header;
