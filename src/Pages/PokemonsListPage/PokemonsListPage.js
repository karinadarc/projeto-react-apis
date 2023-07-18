import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons } from "./PokemonsListPageStyle";

const PokemonsListPage = (props) => {

  const mostrarTelaPokedex = () => {
    props.mudarTela("pokedex")

  }
  const mostrarTelaDetalhes = () => {
    props.mudarTela("detalhes")
  }

  return (
    <>
      <Header functionButton={mostrarTelaPokedex} textButton="Pokemon" />
      <ContainerCards>
        <h1>Todos Pokémons</h1>
        <ListPokemons >
          <PokemonCard functionDetalhes={mostrarTelaDetalhes} pokemon="Bulbasaur" textButtonCard="Capturar" />

          
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
