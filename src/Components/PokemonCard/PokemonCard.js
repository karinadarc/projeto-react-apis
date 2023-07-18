import React from "react";
import { CardStyle } from "./PokemonCardStyle";


const PokemonCard = ({pokemon,textButtonCard, functionDetalhes }) => {
  return (
    <CardStyle>
      <p>{pokemon}</p>
      <a onClick={functionDetalhes} href="javascript:void(0)">detalhes</a>
      <button>{textButtonCard}</button>
    </CardStyle>
  );
};

export default PokemonCard;
