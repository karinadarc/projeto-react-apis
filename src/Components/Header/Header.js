import React from "react";
import { HeaderStyle } from "./HeaderStyle";

const Header = ({ textButton, textLink }) => {



  return (
    <HeaderStyle>
      {textLink && <a href="">{textLink}</a>}
      <img
        src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
        height="60px"></img>
      {textButton && <button>{textButton}</button>} 
    </HeaderStyle>
  );
};

export default Header;
