
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons, TextTodosPokemons } from "./PokemonsListPageStyle";
import useRequestData from "../../Hooks/useRequestData";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { goToPokedex } from "../../Routes/Coordinator";
import {useNavigate } from "react-router-dom";
import { Loading } from "../../Components/Loading/Loading";
import { Error } from "../../Components/Error/Error";


const PokemonsListPage = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate()
  const { myPokemons,capturePokemon,} = context;
  const [pokeapi, isLoading, isError] = useRequestData(`/pokemon?limit=${42}&offset=${0}`)
 

  

  return (
    <>
      <Header colorScheme='blue'
      textButton="Pokédex" 
      funcaoButton={() =>goToPokedex(navigate)}/>

      <ContainerCards>
        <TextTodosPokemons>Todos Pokémons</TextTodosPokemons>
        <ListPokemons>
       
          {isError? <Error/>:
           isLoading? <Loading/>:

           
           pokeapi.results.filter((pokemon)=>{
            return !myPokemons.includes(pokemon.name)
           })
           .map((pokemon)=>{
            return(
              <PokemonCard 
              key={pokemon.name}
              pokemonName={pokemon.name} 
              textButtonCard="Capturar!" 
              functionButton={capturePokemon}
              pokemon={pokemon.name}/>

            )

           })}
          
        </ListPokemons>
      </ContainerCards>
      
    </>
  );
};

export default PokemonsListPage;


