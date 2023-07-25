import Reacts, { useState } from "react";
import PokemonsListPage from "./Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";
import Router from "./Routes/Router";


function App() {
  const [myPokedex, setMyPokedex] = useState([])

  const onChangeListPokemons = (event) =>{
    setMyPokedex(event.target.value)
  }

  const pokemonsCapturados = (pokemon) =>{
    console.log(pokemon)
    // const pokeCapturado = [...]  
  }
  // const [tela, setTela] = useState("home")

  // const mudarTela = (novaTela) => {
  //   setTela(novaTela)
  // } 
   
  // const renderizacaoDeTela = () =>{
  //   if (tela === "home" ){
  //     return <PokemonsListPage mudarTela={mudarTela}/>
  //   } else if (tela === "pokedex"){
  //     return < PokedexPage mudarTela={mudarTela}/>
  //   } else if (tela === "detalhes"){
  //     return <PokemonDetailPage  mudarTela={mudarTela}/>
  //   } else {
  //     return <p>Página não encontrada!</p>
  //   }
  // }

  return (
    <>
      <Router/>
    </>
  );
}

export default App;
