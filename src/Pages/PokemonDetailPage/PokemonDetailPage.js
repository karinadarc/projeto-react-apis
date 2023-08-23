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
import { Divider, Progress } from '@chakra-ui/react'
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";

const PokemonDetailPage = () => {
  const params = useParams();
  const context = useContext(GlobalContext);
  
  const {capturePokemon, removerPokemon, myPokemons} = context;


  //O que a função retornar vai para quem invocar a função isMyPokemon.  Se eu colocar as {} preciso chamar o return
  const isMyPokemon = () =>myPokemons.includes(pokemonDetailName)

  const addOrRemovePokemon = () =>{
    
    if(isMyPokemon()){
      removerPokemon(pokemonDetailName)
      return
    }
    capturePokemon(pokemonDetailName)
  }
  

  const pokemonDetailName = params.name;
  // console.log(params.name);

  const [pokeapi, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonDetailName}`
  );

  const getButtonColor = () => isMyPokemon()?'red': 'blue'
  const getButtonText = () => isMyPokemon()?"Excluir da Pokédex": "Adicionar Pokémon"

  const colorProgress = (valor) =>{
    if(valor < 33) return 'yellow'
    if (valor < 66) return 'orange'
    return 'red'
  }

  return (
    <>
      <Header colorScheme={getButtonColor()}
      textButton={getButtonText()}
      funcaoButton={addOrRemovePokemon}
       textLink="< Todos Pokémons" />
      
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
                      <Divider/>
                      </div>
                      <div>
                      <Progress value={stat.base_stat} colorScheme={colorProgress(stat.base_stat)} size='sm'/>
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
