import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useRequestData from "../../Hooks/useRequestData";
import {
  BackPoke,
  BaseStats,
  BasicStats,
  ContainerBaseStats,
  ContainerDetailPages,
  DetailsPokemons,
  FrontPoke,
  ImgContainerPokemon,
  ImgPokemonDetail,
  Moves,
  NomeBase,
  PokeImg,
  ProgressStyle,
  TituloBaseStats,
  TituloDetalhe,
  Type1,
  Type2,
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
              <TituloBaseStats>Base Stats</TituloBaseStats>
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

            <TypesDetail>
              <p>#{pokeapi.id.toString().padStart(3, "0")}</p>
              <p>{pokeapi.name}</p>
              {pokeapi.types.map((obj) => {
                return (
                  <TypeImage key={obj.type.name} pokemonType={obj.type.name} />
                );
              })}
            </TypesDetail>

            <Moves>
              <h2>Moves:</h2>
              {pokeapi.moves.slice(0, 30).map((move) => {
                return <p key={move}>{move.move.name}</p>;
              })}
            </Moves>
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
