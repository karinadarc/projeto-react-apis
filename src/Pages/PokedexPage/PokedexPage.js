import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import useRequestData from "../../Hooks/useRequestData";
import { ContainerPokedex, MyPokemonsList } from "./PokedexPageStyle";

const PokedexPage = (props) => {

 const pokemonCapurado = () =>{
  return ["bulbasaur", "ivysaur"]
 }

  const mostrarTelaDetalhes = () =>{
    props.mudarTela("detalhes")
  }

  const mostrarTelaHome = () =>{
    props.mudarTela('home')
  }

  return (
    <>
      <Header functionLink={mostrarTelaHome} textLink="Todos os Pokémons" />
      <ContainerPokedex>
        <h1>Meus Pokémons</h1>
      <MyPokemonsList>
        {pokemonCapurado().map((pokeCapurado)=>{
          return(
            <PokemonCard  
            key={pokeCapurado}
            pokemonName={pokeCapurado}
             />
          )
         
        })}
        
       
      </MyPokemonsList>
      </ContainerPokedex>
    </>
  );
};

export default PokedexPage;
