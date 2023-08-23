import { useEffect, useState } from "react";
import GlobalContext from "./GlobalContext";
import { useDisclosure } from "@chakra-ui/react";

const GlobalState = ({ children }) => {
  const [imgModal, setImgModal] = useState("");
  const [myPokemons, setMyPokemons] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  

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
    setImgModal("capture");
    onOpen();
  };

  useEffect(() => {
    if (myPokemons.length) {
      saveLocalStorage();
      console.log("local atualizado");
    }
  }, [myPokemons]);

  const removerPokemon = (pokemonName) => {
    const novaListaPokemons = myPokemons.filter(
      (pokeCapturado) => pokeCapturado !== pokemonName
    );

    localStorage.setItem("capturedPokemons", JSON.stringify(novaListaPokemons));
    setMyPokemons(novaListaPokemons);
    setImgModal("remove");
    onOpen();

    console.log(pokemonName);
  };

  //------------------------------------------------------------------------------------------------

  const data = {
    saveLocalStorage,
    // capturedPokemons,
    // setCapturedPokemons,
    capturePokemon,
    myPokemons,
    setMyPokemons,
    removerPokemon,
    imgModal,
    // setImgModal,
    // cardModal,
    // setCardModal,
    isOpen,
    onOpen,
    onClose,
  };

  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

export default GlobalState;
