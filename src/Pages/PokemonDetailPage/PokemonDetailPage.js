import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useRequestData from "../../Hooks/useRequestData";
import {
  BackPoke,
  BaseStats,
  BasicStats,
  ContainerBaseStats,
  ContainerDetailPages,
  ContainerInfosDetail,
  ContainerMoves,
  DetailsPokemons,
  FrontPoke,
  IdStyle,
  ImgContainerPokemon,
  ImgPokemonDetail,
  Moves,
  MovesStyles,
  NomeBase,
  NomePokemonStyle,
  PokeImg,
  ProgressStyle,
  TituloBaseStats,
  TituloDetail,
  TituloDetalhe,
  Type1,
  Type2,
  TypeStyle,
  TypesDetail,
} from "./PokemonDetailPageStyle";
import TypeImage from "../../Components/TypeImage/TypeImage";
import { CardColor } from "../../ColorCard/CardColor";
import { Progress } from '@chakra-ui/react'

const PokemonDetailPage = () => {
  const params = useParams();

  const pokemonDetailName = params.name;
  // console.log(params.name);

  const [pokeapi, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonDetailName}`
  );

  return (
    <>
      <Header colorScheme="red" textButton="Excluir da Pokédex" textLink="< Todos Pokémons" />

      <ContainerDetailPages>
        <TituloDetalhe>
        <p>Detalhes</p>
        </TituloDetalhe>
       
        {isError ? (
          <p>Erro!!!</p>
        ) : isLoading ? (
          <p>Carregando....</p>
        ) : (
          <DetailsPokemons color={CardColor[pokeapi.types[0].type.name]}>

            <FrontPoke>
            <PokeImg
              src={
                pokeapi.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
            />
            </FrontPoke>
           
            <BackPoke>
            <PokeImg
              src={
                pokeapi.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
            />
            </BackPoke>
            
            <BaseStats>
              <TituloDetail>Base Stats</TituloDetail>
              {pokeapi.stats.map((stat, index) => {
                return (
                  <ContainerBaseStats key={index}>
                    <div>
                    <NomeBase>{stat.stat.name}   <strong>{stat.base_stat}</strong> </NomeBase>
                      </div>
                      <div>
                      <Progress value={stat.base_stat} max="100"/>
                      </div>
                  </ContainerBaseStats>
                );
              })}
              <p>
                Total:
                {pokeapi.stats.reduce(
                  (total, stat) => total + stat.base_stat,0
                )}
              </p>
            </BaseStats>

            <ContainerInfosDetail>
              <IdStyle>#{pokeapi.id.toString().padStart(3, "0")}</IdStyle>
              <NomePokemonStyle>{pokeapi.name}</NomePokemonStyle>
              <TypeStyle>
              {pokeapi.types.map((obj) => {
                return (
                  <TypeImage key={obj.type.name} pokemonType={obj.type.name} />
                );
              })}
              </TypeStyle>
            </ContainerInfosDetail>

            <ContainerMoves>
              <TituloDetail>Moves:</TituloDetail>
              <MovesStyles>
              {pokeapi.moves.slice(0, 30).map((move) => {
                return <p key={move}>{move.move.name}</p>;
              })}
              </MovesStyles>
            </ContainerMoves>

            <ImgContainerPokemon>
              <ImgPokemonDetail
                src={pokeapi.sprites.other["official-artwork"].front_default}
              />
            </ImgContainerPokemon>
          </DetailsPokemons>
        )}
      </ContainerDetailPages>
    </>
  );
};

export default PokemonDetailPage;
