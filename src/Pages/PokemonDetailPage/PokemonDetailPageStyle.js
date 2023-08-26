import { styled } from "styled-components";
import { images } from "../../assets/importImages";

export const ContainerDetailPages = styled.section`
  background: #5e5e5e;
  display: flex;
  flex-direction: column;
  min-height:85vh;
  background-image: url(${images.pokeDetail});
  background-size: 150vh;
  background-position: 30% top;
  background-repeat: no-repeat;

`;

export const TituloDetalhe = styled.div`
  color: #fff;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1%;
  padding-left:5%;
  
`;

export const DetailsPokemons = styled.section`
  background-color: ${(props) => props.color};
  background-image: url(${images.pokeDetail});
  background-repeat: no-repeat;
  background-position: top right;
  padding: 2%;
  display: grid;
  width: 93vw;
  height: 73vh;
  border-radius: 30px;
  align-self: center;
  border-style: solid;
  border-color: #00000024;
  grid-template-areas:
    "frontPoke basicStats typesDetail imgContainerPokemon"
    "frontPoke basicStats moves   imgContainerPokemon    "
    "backPoke  basicStats moves    imgContainerPokemon  "
    "backPoke  basicStats moves   imgContainerPokemon   ";
`;

export const FrontPoke = styled.div`
  margin:2%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 30vh;
  border-radius: 20px;
  background: #ffffff;
  border: 2px solid #fff;
  grid-area: frontPoke;
`;

export const BackPoke = styled.div`
  display: flex;
  margin:2%;
  align-items: center;
  justify-content: center;
  width: 15vw;
  height: 30vh;
  border-radius: 20px;
  background: #ffffff;
  border: 2px solid #fff;
  grid-area: backPoke;
`;

export const PokeImg = styled.img`
  width: 7vw;
`;

export const BaseStats = styled.div`
  width: 25vw;
  height: 63vh;
  top: 24px;
  left: 360px;
  border-radius: 20px;
  background: #ffffff;
  grid-area: basicStats;
`;

export const TituloDetail = styled.p`
font-size:1.7rem;
font-weight: 700;
padding-left:10px;
` 
export const NomeBase = styled.span`
font-size:1.2em;
color: #5e5e5e;
text-transform: capitalize;
float:right;

strong{
  color:black;
}
`

export const ContainerBaseStats = styled.div`
display:flex;
align-items:center;

div{
  width:70%;
  margin-left:5%;
}
`

export const NomePokemonStyle = styled.p`
  text-transform: capitalize;
  font-family: "Inter", sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
 
`;

export const ContainerInfosDetail = styled.div`
  grid-area: typesDetail;
`;

export const IdStyle = styled.p`
color: #FFF;
font-size: 19px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const TypeStyle = styled.div`
 display:flex;
 width:7vw;
 height:7vh;
`;

export const ImgPokemonDetail = styled.img`
  height: 40vh;
  position: relative;
  top: -110px;
  right: 0;
  z-index: 100;
`;
export const ImgContainerPokemon = styled.div`
  grid-area: imgContainerPokemon;

`;

export const ContainerMoves = styled.div`
  max-height: 46vh;
  width:20vw;
  top: 184px;
  left: 771px;
  border-radius: 20px;
  background: #FFF;
  grid-area: moves;

`;


export const MovesStyles = styled.div`
  height:38vh;
  overflow:auto;

p{
  width:fit-content;
  text-transform: capitalize;
  padding:5px;
  margin:8px;
  border-radius: 12px;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  background: #ECECEC;

}
`
export const ContainerTotal = styled.div`
display:flex;
align-items:center;

div{
  width:45%;
  margin-left:5%;
}

`
export const TotalStyle = styled.p`
font-size:1.2em;
color: #5e5e5e;
text-transform: capitalize;
float:right;

strong{
  color:black;
}

`

