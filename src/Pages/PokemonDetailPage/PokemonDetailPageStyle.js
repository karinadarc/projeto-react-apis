import { styled } from "styled-components";

export const ContainerDetailPages = styled.section`
background-color: grey;


`

export const DetailsPokemons = styled.section`
display:grid;
width: 1389.142822265625px;
height: 663px;
top: 348px;
left: 25px;
border-radius: 12px;
border-width: [object Object]px, [object Object]px, [object Object]px, [object Object]px;
border-style: solid;
border-color: #00000024;
grid-template-areas: "frontPoke basicStats type1 type2"
                     "frontPoke basicStats moves moves"
                     "backPoke  basicStats moves moves"
                     "backPoke  basicStats moves moves";
`
                         
export const FrontPoke = styled.div`
width: 282px;
height: 282px;
top: 26px;
left: 44px;
border-radius: 8px;
border: 2px;
background: #FFFFFF;
border: 2px solid #FFFFFF;
grid-area:frontPoke;
`

export const BackPoke = styled.div`
width: 282px;
height: 282px;
top: 355px;
left: 44px;
border-radius: 8px;
border: 2px;
border: 2px solid #FFFFFF;
background: #FFFFFF;
grid-area: backPoke;

`

export const BasicStats = styled.div`
width: 343px;
height: 613px;
top: 24px;
left: 360px;
border-radius: 12px;
background: #FFFFFF;
grid-area: basicStats;

`
export const Type1 = styled.div`
width: Hug (91px);
height: Hug (31px);
top: 106px;
left: 774px;
padding: 5px 8px 5px 8px;
border-radius: 8px;
border: 1px;
gap: 17px;
background: linear-gradient(0deg, #70B873, #70B873),
linear-gradient(0deg, rgba(255, 255, 255, 0.47), rgba(255, 255, 255, 0.47));
border: 1px solid #FFFFFF78;
grid-area: type1;
`
export const Type2 = styled.div`
 width: Hug (99px);
height: Hug (31px);
top: 107px;
left: 883px; 
padding: 5px 8px 5px 8px;
border-radius: 8px;
border: 1px;
gap: 17px;
background: linear-gradient(0deg, #AD61AE, #AD61AE),
linear-gradient(0deg, rgba(255, 255, 255, 0.47), rgba(255, 255, 255, 0.47));
border: 1px solid #FFFFFF78;
grid-area: type2;
`

export const Moves = styled.div`
 /* width: 292px; */
height: 570px; 
top: 184px;
left: 771px;
border-radius: 8px;
background: #FFFFFF;
grid-area: moves;
`

