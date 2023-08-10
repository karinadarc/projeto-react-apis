import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";

const Header = ({ textButton, textLink}) => {

  const navigate = useNavigate()

  return (
    <HeaderStyle>
      {textLink && <a onClick={() =>goToHome(navigate)} >{textLink}</a>}
      <img
        src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
        height="60px"></img>
      {textButton && <button onClick={() => goToPokedex(navigate) } >{textButton}</button>} 
    </HeaderStyle>
  );
};

export default Header;
