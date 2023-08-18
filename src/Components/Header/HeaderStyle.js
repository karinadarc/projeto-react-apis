import { styled } from "styled-components";

export const HeaderStyle = styled.header`
  display: flex;
  width: 96vw;
  height: 20vh;
  align-items: center;
  img {
    width: 307px;
    height: 113px;
    flex-shrink: 0;
  }

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
