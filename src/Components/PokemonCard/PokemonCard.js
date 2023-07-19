import React from "react";
import { CardStyle } from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetail} from "../../Routes/Coordinator";


const PokemonCard = ({pokemon,textButtonCard }) => {

  const navigate = useNavigate()

  return (
    <CardStyle>
      <p>{pokemon}</p>
      <a onClick={() =>goToDetail(navigate)} href="javascript:void(0)">detalhes</a>
      <button>{textButtonCard}</button>
    </CardStyle>
  );
};

export default PokemonCard;
