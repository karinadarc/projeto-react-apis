import { styled } from "styled-components";

export const ContainerDetailPages = styled.section`
  background-color: grey;
  display:flex;
  flex-direction:column;
`;

export const DetailsPokemons = styled.section`
  background-color: ${(props) => props.color};
  display: grid;
  width: 1389.142822265625px;
  height: 663px;
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

export const FrontPoke = styled.img`
  width: 15vw;
  height: 35vh;
  /* top: 26px; */
  /* left: 44px; */
  border-radius: 8px;
  border: 2px;
  background: #ffffff;
  border: 2px solid #ffffff;
  grid-area: frontPoke;
`;

export const BackPoke = styled.img`
  width: 15vw;
  height: 35vh;
  /* top: 355px; */
  /* left: 44px; */
  border-radius: 8px;
  border: 2px;
  border: 2px solid #ffffff;
  background: #ffffff;
  grid-area: backPoke;
`;

export const BaseStats = styled.div`
  width: 343px;
  height: 613px;
  top: 24px;
  left: 360px;
  border-radius: 12px;
  background: #ffffff;
  grid-area: basicStats;
`;
export const TypesDetail = styled.div`
  grid-area: typesDetail;
`;
export const ImgPokemonDetail = styled.img`
  width: 20vw;
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
  /* width: 292px; */
  height: 470px;
  top: 184px;
  left: 771px;
  border-radius: 8px;
  background: #ffffff;
  grid-area: moves;
`;
