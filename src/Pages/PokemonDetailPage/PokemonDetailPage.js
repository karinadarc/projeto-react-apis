import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useRequestData from "../../Hooks/useRequestData";
import {
  BackPoke,
  BaseStats,
  BasicStats,
  ContainerDetailPages,
  DetailsPokemons,
  FrontPoke,
  ImgContainerPokemon,
  ImgPokemonDetail,
  Moves,
  Type1,
  Type2,
  TypesDetail,
} from "./PokemonDetailPageStyle";
import TypeImage from "../../Components/TypeImage/TypeImage";
import { CardColor } from "../../ColorCard/CardColor";

const PokemonDetailPage = () => {
  const params = useParams();

  const pokemonDetailName = params.name;
  // console.log(params.name);

  const [pokeapi, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonDetailName}`
  );

  return (
    <>
      <Header textButton="Excluir da Pokédex" textLink="Todos os Pokémons" />

      <ContainerDetailPages>
        <h1>Detalhes</h1>
        {isError ? (
          <p>Erro!!!</p>
        ) : isLoading ? (
          <p>Carregando....</p>
        ) : (
          <DetailsPokemons color={CardColor[pokeapi.types[0].type.name]}>
            <FrontPoke
              src={
                pokeapi.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
            />

            <BackPoke
              src={
                pokeapi.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
            />
            <BaseStats>
              <h2>Base Stats</h2>
              {pokeapi.stats.map((stat, index) => {
                return (
                  <p key={index}>
                    <span>{stat.stat.name}</span>
                    <span>{stat.base_stat}</span>
                    <progress value={stat.base_stat} max="100"></progress>
                  </p>
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
              {pokeapi.moves.slice(0, 5).map((move) => {
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
