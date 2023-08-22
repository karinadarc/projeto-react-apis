
import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerCards, ListPokemons, TextTodosPokemons } from "./PokemonsListPageStyle";
import useRequestData from "../../Hooks/useRequestData";
import { useContext } from "react";
import GlobalContext from "../../contexts/GlobalContext";
import { goToPokedex } from "../../Routes/Coordinator";
import {useNavigate } from "react-router-dom";


const PokemonsListPage = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate()

  
  const { myPokemons,capturePokemon,} = context;


  const [pokeapi, isLoading, isError] = useRequestData("/pokemon")

  // const [capturedPokemons, setCapturedPokemons] = useState([])


//recupera os dados quando a página carrega
  // useEffect(() => {
  //   const ListPokemons = JSON.parse(localStorage.getItem("capturedPokemons"));
  //   // console.log(ListPokemons)
  //   ListPokemons && setCapturedPokemons(ListPokemons);
  //   // console.log(ListPokemons)
  // }, []);
  
  //3
  // const saveLocalStorage = () =>{
  //   const ListPokemons = JSON.stringify(capturedPokemons);
  //   localStorage.setItem("capturedPokemons", ListPokemons);
  // }

  // 1
  // const capturePokemon = (pokemon) => {
  //   setCapturedPokemons([...capturedPokemons, pokemon]);
  // };

  //2
  // useEffect(()=>{
  //   if (capturedPokemons.length){
  //     saveLocalStorage() 
  //     console.log("local atualizado")
  //   }
  // },[capturedPokemons])


  
  

  return (
    <>
      <Header colorScheme='blue' textButton="Pokédex" 
      funcaoButton={() =>goToPokedex(navigate)}/>

      <ContainerCards>
        <TextTodosPokemons>Todos Pokémons</TextTodosPokemons>
        <ListPokemons>
          {isError? <p>Erro!!!</p>:
           isLoading? <p>Carregando....</p>:
           
           pokeapi.results.filter((pokemon)=>{
            return !myPokemons.includes(pokemon.name)
           })
           .map((pokemon)=>{
            return(
              <PokemonCard 
              key={pokemon.name}
              pokemonName={pokemon.name} 
              textButtonCard="Capturar" 
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


