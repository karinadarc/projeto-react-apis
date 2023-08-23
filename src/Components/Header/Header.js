import React, { useContext } from "react";
import { ButtonAddStyle, HeaderStyle, LinkStyle } from "./HeaderStyle";
import { useNavigate } from "react-router-dom";
import { goToHome, goToPokedex } from "../../Routes/Coordinator";
import { images } from "../../assets/importImages";
import { Button, ButtonGroup, useConst} from "@chakra-ui/react";
import { TransitionExample } from "../Modal/TransitionExample";
import GlobalContext from "../../contexts/GlobalContext";


const Header = ({ textButton, textLink, colorScheme, funcaoButton}) => {

 
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  // const {CardModal}

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
      <TransitionExample
      /> 
    </HeaderStyle>
  );
};

export default Header;
