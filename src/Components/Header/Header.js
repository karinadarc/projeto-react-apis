import React from "react";
import { HeaderStyle } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";

const Header = ({ textButton, textLink, functionButton, functionLink}) => {

  const navigate = useNavigate()

  return (
    <HeaderStyle>
      {textLink && <a onClick={() =>goToHome(navigate)} href="javascript:void(0)">{textLink}</a>}
      <img
        src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-8.png"
        height="60px"></img>
      {textButton && <button onClick={() => goToPokedex(navigate, "mypokedex") } >{textButton}</button>} 
    </HeaderStyle>
  );
};

export default Header;
