import { useParams } from "react-router-dom";
import Header from "../../Components/Header/Header";
import useRequestData from "../../Hooks/useRequestData";
import {
  BackPoke,
  BaseStats,
  ContainerBaseStats,
  ContainerDetailPages,
  ContainerInfosDetail,
  ContainerMoves,
  ContainerTotal,
  DetailsPokemons,
  FrontPoke,
  IdStyle,
  ImgContainerPokemon,
  ImgPokemonDetail,
  MovesStyles,
  NomeBase,
  NomePokemonStyle,
  PokeImg,
  TituloDetail,
  TituloDetalhe,
  TotalStyle,
  TypeStyle,
} from "./PokemonDetailPageStyle";
import TypeImage from "../../Components/TypeImage/TypeImage";
import { CardColor } from "../../ColorCard/CardColor";
import { Divider, Progress } from "@chakra-ui/react";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";

const PokemonDetailPage = () => {
  const params = useParams();
  const context = useContext(GlobalContext);

  const { capturePokemon, removerPokemon, myPokemons } = context;

  //O que a função retornar vai para quem invocar a função isMyPokemon.  Se eu colocar as {} preciso chamar o return
  const isMyPokemon = () => myPokemons.includes(pokemonDetailName);

  const addOrRemovePokemon = () => {
    if (isMyPokemon()) {
      removerPokemon(pokemonDetailName);
      return;
    }
    capturePokemon(pokemonDetailName);
  };

  const pokemonDetailName = params.name;

  const [pokeapi, isLoading, isError] = useRequestData(
    `/pokemon/${pokemonDetailName}`
  );

  const getButtonColor = () => (isMyPokemon() ? "red" : "blue");
  const getButtonText = () =>
    isMyPokemon() ? "Excluir da Pokédex" : "Adicionar Pokémon";

  const colorProgress = (valor) => {
    if (valor < 49) return "blue";
    if (valor > 50) return "red";
    
  };

  return (
    <>
      <Header
        colorScheme={getButtonColor()}
        textButton={getButtonText()}
        funcaoButton={addOrRemovePokemon}
        textLink="Todos Pokémons"
      />

      <ContainerDetailPages>
        <TituloDetalhe>
          <p>Detalhes</p>
        </TituloDetalhe>

        {isError ? (
          <Error
          name={pokemonDetailName} />
        ) : isLoading ? (
          <Loading />
        ) : (
          <DetailsPokemons color={CardColor[pokeapi.types[0].type.name]}>
            <FrontPoke>
              <PokeImg
                src={
                  pokeapi.sprites.versions["generation-v"]["black-white"]
                    .animated.front_default
                }
              />
            </FrontPoke>

            <BackPoke>
              <PokeImg
                src={
                  pokeapi.sprites.versions["generation-v"]["black-white"]
                    .animated.back_default
                }
              />
            </BackPoke>

            <BaseStats>
              <TituloDetail>Base Stats</TituloDetail>
              <Divider />
              {pokeapi.stats.map((stat, index) => {
                return (
                  <>
                    <ContainerBaseStats key={index}>
                      <div>
                        <NomeBase>
                          {stat.stat.name} <strong>{stat.base_stat}</strong>{" "}
                        </NomeBase>
                      </div>

                      <div>
                        <Progress
                          w="lg"
                          h="7px"
                          value={stat.base_stat}
                          colorScheme={colorProgress(stat.base_stat)}
                          size="sm"
                          borderRadius="2px"
                          textAlign="center"
                        />
                      </div>
                    </ContainerBaseStats>
                    <Divider />
                  </>
                );
              })}
              <ContainerTotal>
                <div>
                  <TotalStyle>
                    Total:
                    <strong>
                      {pokeapi.stats.reduce(
                        (total, stat) => total + stat.base_stat,
                        0
                      )}
                    </strong>
                  </TotalStyle>
                </div>
              </ContainerTotal>
            </BaseStats>

            <ContainerInfosDetail>
              <IdStyle>#{pokeapi.id.toString().padStart(3, "0")}</IdStyle>
              <NomePokemonStyle>{pokeapi.name}</NomePokemonStyle>
              <TypeStyle>
                {pokeapi.types.map((obj) => {
                  return (
                    <TypeImage
                      key={obj.type.name}
                      pokemonType={obj.type.name}
                    />
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
