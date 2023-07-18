import Reacts, { useState } from "react";
import PokemonsListPage from "./Pages/PokemonsListPage/PokemonsListPage";
import PokedexPage from "./Pages/PokedexPage/PokedexPage";
import PokemonDetailPage from "./Pages/PokemonDetailPage/PokemonDetailPage";

function App() {
  const [tela, setTela] = useState("home")

  const mudarTela = (novaTela) => {
    setTela(novaTela)
  } 
   
  const renderizacaoDeTela = () =>{
    if (tela === "home" ){
      return <PokemonsListPage mudarTela={mudarTela}/>
    } else if (tela === "pokedex"){
      return < PokedexPage mudarTela={mudarTela}/>
    } else if (tela === "detalhes"){
      return <PokemonDetailPage  mudarTela={mudarTela}/>
    } else {
      return <p>Página não encontrada!</p>
    }
  }

  return (
    <>
      {renderizacaoDeTela()}
      {/* <PokemonsListPage/> */}
      {/* <PokedexPage/> */}
      {/* <PokemonDetailPage/> */}
    </>
  );
}

export default App;
