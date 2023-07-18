import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons } from "./PokemonsListPageStyle";

const PokemonsListPage = () => {
  return (
    <>
      <Header textButton="Pokemon" />
      <ContainerCards>
        <h1>Todos Pokémons</h1>
        <ListPokemons>
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
          <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        </ListPokemons>
      </ContainerCards>
    </>
  );
};

export default PokemonsListPage;
