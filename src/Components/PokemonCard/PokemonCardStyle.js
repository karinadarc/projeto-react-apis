import styled from "styled-components";
import { images } from "../../assets/importImages";

export const CardStyle = styled.div`
  display: grid;
  background-color: ${(props) => props.color};
  background-image: url(${images.pokeCard});
  background-repeat: no-repeat;
  background-position: top right;
  position: relative;
  border-radius: 12px;
  padding: 16px;
  margin: 4vh;
  width: 440px;
  height: 210px;
  flex-shrink: 0;
  grid-template-areas:
    "descricao imagem"
    "types imagem"
    "linkButton linkButton";
`;

export const IdStyle = styled.p`
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ImagemPokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
`;

export const ContainerImage = styled.div`
  grid-area: imagem;

`;
export const TypeStyle = styled.img`
  width: 6vw;
  height: 5.5vh;
  padding: 1%;
`;
export const ContainerLinkButton = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  bottom: 10px;
  align-self: end;
  grid-area: linkButton;

  a{
  text-decoration-line: underline;
  
  }
`;

export const ContainerDescricaoCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: descricao;
`;
export const NomePokemonStyle = styled.p`
  text-transform: capitalize;
  font-size: 32px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  line-height: normal;
`;

export const ButtonCapturar = styled.button`
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background:${(props) => props.colorCard};
  color:${(props) => props.colorText};
  border-radius: 8px;
  border: none;
  cursor: pointer;
  text-decoration:none;
`;
export const ContainerTypes = styled.div`
  grid-area: types;
  display: flex;
`;
export const ImgPoke = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  background-image: url(${images.cardloading}) ;
  background-size:100% 100%;
  position: relative;
  border-radius: 12px;
  padding: 16px;
  margin: 4vh;
  width: 440px;
  height: 210px;
  top: -10px;
  /* flex-shrink: 0; */
  
`;
