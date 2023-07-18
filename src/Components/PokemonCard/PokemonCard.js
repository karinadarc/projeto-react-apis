import React from "react";
import { CardStyle } from "./PokemonCardStyle";


const PokemonCard = ({pokemon,textButtonCard}) => {
  return (
    <CardStyle>
      <p>{pokemon}</p>
      <a>detalhes</a>
      <button>{textButtonCard}</button>
    </CardStyle>
  );
};

export default PokemonCard;
