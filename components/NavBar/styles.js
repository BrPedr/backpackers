import styled from "styled-components";

export const Container = styled.header`
  grid-area: NB;


  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-basis: 263px;
  flex-direction: row;
  justify-content: space-between;
`;

export const LinksContainer = styled.div`
  flex-basis: 390px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 15px;
  font-weight: 700;
  line-height: 18.29px;

  color: var(--black);

  a:hover{
    opacity: 0.4;
  }
`;

export const Title = styled.h1`
  font-family: "Comfortaa", sans-serif;
`;
