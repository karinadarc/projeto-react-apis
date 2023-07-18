import Header from "../../Components/Header/Header";
import { BackPoke, BasicStats, ContainerDetailPages, DetailsPokemons, FrontPoke, Moves, Type1, Type2 } from "./PokemonDetailPageStyle";

const PokemonDetailPage = (props) => {

  const mostrarTelaHome = () =>{
    props.mudarTela("home")
  }

  return (
    <>
        <Header
        textButton='Excluir da Pokédex'
        functionLink={mostrarTelaHome} textLink='Todos os Pokémons'/>
      <ContainerDetailPages>
        <h1>Detalhes</h1>
        <DetailsPokemons>
          <FrontPoke>Imagem frontal</FrontPoke>
          <BackPoke>Imagem de costas</BackPoke>
          <BasicStats>Base Stats</BasicStats>
          <Type1>Type1</Type1>
          <Type2>Type2</Type2>
          <Moves>Moves</Moves>
        </DetailsPokemons>
      </ContainerDetailPages>
    </>
  );
};

export default PokemonDetailPage;
