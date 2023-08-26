import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 96vw;
  height: 15vh;
  align-items: center;

  Button {
    width: 280px;
    height: 74px;
    align-self: flex-end;
    flex-shrink: 0;
    &:hover {
      cursor: pointer;
    }
  }
  div {
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33.33%;
  }
`;

export const LinkStyle = styled.a`
  display: flex;
  color: #1a1a1a;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-decoration-line: underline;
  &:hover {
    cursor: pointer;
  }
`;

export const LogoImg = styled.img`
  width: 15vw;
  height: 12vh;
`;

export const SetaStyle = styled.img`
  width: 3vh;
  height: 1%.5;
`;
