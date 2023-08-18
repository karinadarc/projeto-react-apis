import React from "react";
import {
  ButtonCapturar,
  CardStyle,
  ContainerDescricaoCard,
  ContainerImage,
  ContainerLinkButton,
  ContainerTypes,
  IdStyle,
  ImagemPokemon,
  NomePokemonStyle,
  TypeStyle,
} from "./PokemonCardStyle";
import { useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/Coordinator";
import useRequestData from "../../Hooks/useRequestData";
import { TypesColor } from "../../ColorCard/TypeColor";
import { CardColor } from "../../ColorCard/CardColor";

const PokemonCard = ({ pokemonName, textButtonCard, functionButton }) => {
  //console.log(pokemon)
  const [infosPokemon, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonName}`
  );

  const handleClick = () =>{
    functionButton(pokemonName)
  }
  

  // console.log(TypesColor);

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
            <IdStyle>#{infosPokemon.id.toString().padStart(3,'0')}</IdStyle>
            <NomePokemonStyle>{pokemonName}</NomePokemonStyle>
          </ContainerDescricaoCard>

          <ContainerTypes>
          {infosPokemon.types.map((type) => {
            return (
              <TypeStyle
                key={type.type.name}
                src={TypesColor[type.type.name]}
              />
            );
          })}
          </ContainerTypes>

          
          <ContainerImage>
          <ImagemPokemon
            src={infosPokemon.sprites.other["official-artwork"].front_default}
          ></ImagemPokemon>
          </ContainerImage>
          

          <ContainerLinkButton>
            <a onClick={() => goToDetail(navigate,infosPokemon.name)} href="javascript:void(0)">
              Detalhes
            </a>
            <ButtonCapturar onClick={handleClick}>{textButtonCard}</ButtonCapturar>
            </ContainerLinkButton>
           
          
        </>
      )}
    </CardStyle>
  );
};

export default PokemonCard;
