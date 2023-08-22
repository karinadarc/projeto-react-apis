import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = ({ children }) => {
  // const [capturedPokemons, setCapturedPokemons] = useState([]); //listPage
  const [myPokemons, setMyPokemons] = useState([])


  useEffect(() => {
    const ListPokemons = JSON.parse(localStorage.getItem("capturedPokemons"));
    // console.log(ListPokemons)
    ListPokemons && setMyPokemons(ListPokemons);
    // console.log(ListPokemons)
  }, []);

  const saveLocalStorage = () => {
    const ListPokemons = JSON.stringify(myPokemons);
    localStorage.setItem("capturedPokemons", ListPokemons);
  };

  const capturePokemon = (pokemon) => {
    setMyPokemons([...myPokemons, pokemon]);
  };

  useEffect(() => {
    if (myPokemons.length) {
      saveLocalStorage();
      console.log("local atualizado");
    }
  }, [myPokemons]);


 

  const removerPokemon = (pokemonName) =>{
    const novaListaPokemons = myPokemons.filter(pokeCapturado => pokeCapturado !== pokemonName);

    localStorage.setItem("capturedPokemons", JSON.stringify(novaListaPokemons));
    setMyPokemons(novaListaPokemons)
 
    console.log(pokemonName)
  }

  //------------------------------------------------------------------------------------------------

  const data = {
    saveLocalStorage,
    // capturedPokemons,
    // setCapturedPokemons,
    capturePokemon,
    myPokemons, 
    setMyPokemons,
    removerPokemon

  }

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>;
};

export default GlobalState;
