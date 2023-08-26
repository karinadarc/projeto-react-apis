import { useContext } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerPokedex,
  MyPokemonsList,
  TituloPokedex,
} from "./PokedexPageStyle";
import GlobalContext from "../../contexts/GlobalContext";

const PokedexPage = () => {
  const context = useContext(GlobalContext);
  const { myPokemons, removerPokemon } = context;
  console.log(myPokemons);

  return (
    <>
      <Header textLink="Todos Pokémons" />

      <ContainerPokedex>
        <TituloPokedex>Meus Pokémons</TituloPokedex>
        <MyPokemonsList>
          {myPokemons.map((pokeCapurado) => {
            return (
              <PokemonCard
                key={pokeCapurado}
                pokemonName={pokeCapurado}
                textButtonCard="Excluir" 
                functionButton={removerPokemon}
              />
            );
          })}
        </MyPokemonsList>
      </ContainerPokedex>
    </>
  );
};

export default PokedexPage;
