import React from "react";
import {
  ButtonCapturar,
  CardStyle,
  ContainerDescricaoCard,
  ContainerLinkButton,
  ImagemPokemon,
  NomePokemonStyle,
  TypeStyle,
} from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData";
import { TypesColor } from "../../ColorCard/TypeColor";
import { CardColor } from "../../ColorCard/CardColor";

const PokemonCard = ({ pokemonName, textButtonCard }) => {
  //console.log(pokemon)
  const [infosPokemon, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonName}`
  );

  console.log(TypesColor);

  const navigate = useNavigate();

  const getPrincialColor = () => {
    if (!isLoading) {
      return CardColor[infosPokemon.types[0].type.name];
    } else {
      return "#000";
    }
  };

  return (
    <CardStyle color={getPrincialColor()}>
      {isError ? (
        <p>Erro!!!</p>
      ) : isLoading ? (
        <p>Carregando....</p>
      ) : (
        <>
          <ContainerDescricaoCard>
            <p>{infosPokemon.id}</p>
            <NomePokemonStyle>{pokemonName}</NomePokemonStyle>
          </ContainerDescricaoCard>

          {infosPokemon.types.map((type) => {
            return (
              <TypeStyle
                key={type.type.name}
                src={TypesColor[type.type.name]}
              />
            );
          })}

          <ImagemPokemon
            src={infosPokemon.sprites.other["official-artwork"].front_default}
          ></ImagemPokemon>

          <ContainerLinkButton>
            <a onClick={() => goToDetail(navigate,infosPokemon.id)} href="javascript:void(0)">
              detalhes
            </a>
            <ButtonCapturar>{textButtonCard}</ButtonCapturar>
          </ContainerLinkButton>
        </>
      )}
    </CardStyle>
  );
};

export default PokemonCard;
