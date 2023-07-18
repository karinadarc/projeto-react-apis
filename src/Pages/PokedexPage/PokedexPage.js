import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerPokedex, MyPokemonsList } from "./PokedexPageStyle";

const PokedexPage = () => {
  return (
    <>
      <Header textLink="Todos os Pokémons" />
      <ContainerPokedex>
        <h1>Meus Pokémons</h1>
      <MyPokemonsList>
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
        <PokemonCard pokemon="Bulbasaur" textButtonCard="Capturar" />
      </MyPokemonsList>
      </ContainerPokedex>
    </>
  );
};

export default PokedexPage;
