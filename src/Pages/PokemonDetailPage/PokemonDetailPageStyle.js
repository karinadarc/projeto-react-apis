import { styled } from "styled-components";

export const ContainerDetailPages = styled.section`
  background: #5e5e5e;
  display: flex;
  flex-direction: column;
  height:auto;
`;

export const TituloDetalhe = styled.div`
  color: #fff;
  /* font-family: Poppins; */
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left:4%;
  padding: 3%;
`;

export const DetailsPokemons = styled.section`
  background-color: ${(props) => props.color};
  padding: 2%;
  display: grid;
  width: 94vw;
  height: 100vh;
  top: 348px;
  left: 25px;
  border-radius: 12px;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #fff;
  grid-area: frontPoke;
`;

export const BackPoke = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 282px;
  height: 282px;
  border-radius: 8px;
  background: #ffffff;
  border: 2px solid #fff;
  grid-area: backPoke;
`;

export const PokeImg = styled.img`
  width: 6vw;
`;

export const BaseStats = styled.div`
  width: 26vw;
  height: 84vh;
  top: 24px;
  left: 360px;
  border-radius: 12px;
  background: #ffffff;
  
  grid-area: basicStats;
`;

export const TituloBaseStats = styled.p`
font-size:1.5rem;
font-weight: 700;
` 
export const NomeBase = styled.span`
font-size:1.3em;
color: #5e5e5e;
text-transform: capitalize;
float:right;
/* align-self: flex-end; */

strong{
  color:black;
}
`

export const ContainerBaseStats = styled.div`
display:flex;
/* flex-direction: column; */
/* align-content:center; */
align-items:center;
/* justify-content:center; */

div{
  width:45%;
  margin-left:5%;
}
`

export const ProgressStyle = styled.progress`
/* align-self:flex-start; */
-webkit-progress-value { background: blue; }
background:red;
float:left;
height:2vh;
border-radius: 35px;
`


export const TypesDetail = styled.div`
  grid-area: typesDetail;
`;
export const ImgPokemonDetail = styled.img`
  /* width: 20vw; */
  height: 30vh;
  position: relative;
  top: -70px;
  right: 0;
  z-index: 100;
`;
export const ImgContainerPokemon = styled.div`
  grid-area: imgContainerPokemon;
  /* background-color:red; */
`;

export const Moves = styled.div`
  overflow-y: auto;
  max-height: 70vh;
  /* width: 292px; */
  /* height: 470px; */
  top: 184px;
  left: 771px;
  border-radius: 8px;
  background: #ffffff;
  grid-area: moves;
`;



