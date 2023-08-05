
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons } from "./PokemonsListPageStyle";
import useRequestData from "../../Hooks/useRequestData";
import { useEffect, useState } from "react";

const PokemonsListPage = () => {
  const [pokeapi, isLoading, isError] = useRequestData("/pokemon")
  const [capturedPokemons, setCapturedPokemons] = useState([])



  useEffect(() => {
    const ListPokemons = JSON.parse(localStorage.getItem("capturedPokemons"));
    // console.log(ListPokemons)
    ListPokemons && setCapturedPokemons(ListPokemons);
    // console.log(ListPokemons)
  }, []);
  
  const saveLocalStorage = () =>{
    const ListPokemons = JSON.stringify(capturedPokemons);
    localStorage.setItem("capturedPokemons", ListPokemons);
  }

  const capturePokemon = (pokemon) => {
    setCapturedPokemons([...capturedPokemons, pokemon]);
  };

  useEffect(()=>{
    if (capturedPokemons.length){
      saveLocalStorage() 
      console.log("local atualizado")
    }
  },[capturedPokemons])


  
  

  return (
    <>
      <Header textButton="Pokemon" />

      <ContainerCards>
        <h1>Todos Pokémons</h1>
        <ListPokemons>
          {isError? <p>Erro!!!</p>:
           isLoading? <p>Carregando....</p>:
           
           pokeapi.results.filter((pokemon)=>{
            return !capturedPokemons.includes(pokemon.name)
           })
           .map((pokemon)=>{
            return(
              <PokemonCard 
              key={pokemon.name}
              pokemonName={pokemon.name} 
              textButtonCard="Capturar" 
              capturePokemon={capturePokemon}
              pokemon={pokemon.name}/>

            )

           })}
          
        </ListPokemons>
      </ContainerCards>
    </>
  );
};

export default PokemonsListPage;


