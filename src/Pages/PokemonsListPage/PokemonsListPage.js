
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons } from "./PokemonsListPageStyle";
import useRequestData from "../../Hooks/useRequestData";
import { useState } from "react";

const PokemonsListPage = () => {

  const [pokeapi, isLoading, isError] = useRequestData("/pokemon")


  return (
    <>
      <Header textButton="Pokemon" />

      <ContainerCards>
        <h1>Todos Pokémons</h1>
        <ListPokemons>
          {isError? <p>Erro!!!</p>:
           isLoading? <p>Carregando....</p>:
           pokeapi.results.map((pokemon)=>{
            return(
              <PokemonCard 
              key={pokemon.name}
              pokemonName={pokemon.name} 
              textButtonCard="Capturar" />

            )

           })}
          
        </ListPokemons>
      </ContainerCards>
    </>
  );
};

export default PokemonsListPage;
