import { useContext, useState } from "react";
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import useRequestData from "../../Hooks/useRequestData";
import { ContainerPokedex, MyPokemonsList } from "./PokedexPageStyle";
import GlobalContext from "../../contexts/GlobalContext";

const PokedexPage = (props) => {
  const context = useContext(GlobalContext);
  // console.log(context.pokedex);
  const { myPokemons, removerPokemon} = context;
  console.log(myPokemons)


  // const [myPokemons, setMyPokemons] = useState(JSON.parse(localStorage.getItem("capturedPokemons") ?? []))

  // const getMyPokemons = () => myPokemons;
 

  // const removerPokemon = (pokemonName) =>{
  //   const novaListaPokemons = getMyPokemons().filter(pokeCapturado => pokeCapturado !== pokemonName);

  //   localStorage.setItem("capturedPokemons", JSON.stringify(novaListaPokemons));
  //   setMyPokemons(novaListaPokemons)
 
  //   console.log(pokemonName)
  // }


  return (
    <>
      <Header  textLink="< Todos Pokémons" />
      <ContainerPokedex>
        <h1>Meus Pokémons</h1>
      <MyPokemonsList>
        {myPokemons.map((pokeCapurado)=>{
          return(
            <PokemonCard  
            key={pokeCapurado}
            pokemonName={pokeCapurado}
            textButtonCard="Deletar" 
            functionButton={removerPokemon}
             />
          )
         
        })}
        
       
      </MyPokemonsList>
      </ContainerPokedex>
    </>
  );
};

export default PokedexPage;
