import styled from "styled-components";

export const CardStyle = styled.div`
  /* padding: 16px;
  min-width: 400px;
  max-width: 440px; */
  background-color: ${(props) => props.color};
  /* border-radius: 12px;
  display: flex;
  position: relative;
  margin: 50px;
  color: #ffffff; */

  width: 25vw;
  height: 30vh;
  /* top: 554px; 
left: 41px;  */
  /* border: 2px solid black; */
  position: relative;
  border-radius: 12px;
  padding: 16px;
  margin: 4vh;
  grid-template-areas:
    "descricao imagem"
    "descricao imagem"
    "linkButton linkButton";
`;

export const ImagemPokemon = styled.img`
  width: 193px;
  height: 193px;
  position: absolute;
  top: -60px;
  right: 0;
  z-index: 2;
  grid-area: imagem;
`;
export const TypeStyle = styled.img`
  /* width: Hug (91px); */
  /* height: Hug (31px); */
  /* padding: 5px 8px 5px 8px; */
  border-radius: 8px;
  border: 1px;
  /* gap: 17px; */
`;
export const ContainerLinkButton = styled.div`
  display: flex;
  /* flex-direction:column; */
  width: Fixed (395px);
  height: Hug (38px);
  top: 159px;
  left: 23px;
  justify-content: space-between;
  grid-area: linkButton;
`;

export const ContainerDescricaoCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: descricao;
`;
export const NomePokemonStyle = styled.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-align: left;
  color: #ffffff;
`;

export const ButtonCapturar = styled.button`
 display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px 10px;
  width: 146px;
  height: 38px;
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 10px;
  right: 22px;
  z-index: 2;
  color: #000;
`
