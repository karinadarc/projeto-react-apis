import styled from "styled-components";

export const CardStyle = styled.div`
  display:grid;
  background-color: ${(props) => props.color};
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
color: #FFF;
/* font-family: Inter; */
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
`

export const ImagemPokemon = styled.img`
  width: 193px;
  height: 193px;
  /* font-family: Poppins; */
  position: absolute;
  top: -40px;
  right: 0;
  z-index: 2;
`;


export const ContainerImage = styled.div`
  grid-area: imagem;


`
export const TypeStyle = styled.img`
 width:6vw;
 height: 5.5vh;
 padding:1%;
`;
export const ContainerLinkButton = styled.div`
display:flex;
justify-content:space-between;
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
bottom: 10px;
align-self: end;
grid-area: linkButton;
`;

export const ContainerDescricaoCard = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: descricao;
`;
export const NomePokemonStyle = styled.p`
  text-transform: capitalize;
  font-family: "Inter", sans-serif;
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
  background: #ffffff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  color: #000;
 `;
export const ContainerTypes = styled.div`
grid-area: types;
display:flex;

`