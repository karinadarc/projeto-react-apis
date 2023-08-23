import { useState } from "react";
import Router from "./Routes/Router";
import {ChakraProvider, theme} from '@chakra-ui/react'
import GlobalState from "./contexts/GlobalState";



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
    <GlobalState>
    <ChakraProvider theme={theme}>
      <Router/>
     </ChakraProvider>
    </GlobalState>
     
  );
}

export default App;
