import React from "react";
import { ButtonAddStyle, HeaderStyle, LinkStyle } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";
import { images } from "../../assets/importImages";
import { Button, ButtonGroup} from "@chakra-ui/react";


const Header = ({ textButton, textLink, colorScheme, funcaoButton}) => {

  const navigate = useNavigate()

  return (
    <HeaderStyle>
      <div>
        {textLink && <LinkStyle onClick={() =>goToHome(navigate)} >{textLink}</LinkStyle>}
      </div>
      <div>
        <img src={images.logo}/>
      </div>
      <div>
        {textButton && <Button colorScheme={colorScheme} onClick={funcaoButton} >{textButton}</Button>} 
      </div>
    </HeaderStyle>
  );
};

export default Header;
