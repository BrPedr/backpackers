import styled from "styled-components";

export const Container = styled.footer`
  grid-area: FT;

  padding-bottom: 2em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  div {
    width: 15em;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1000px) {
      justify-content: space-evenly;
      margin-right: 1em;
    }
    @media (max-width: 500px) {
      justify-content: space-evenly;
      width: 540px;
    }

    @media (max-width: 400px) {
      justify-content: space-evenly;
      width: 640px;
    }
  }
`;

export const Icons = styled.svg`
  width: 48px;
  height: 49px;

  position: relative;

  background: var(--white);

  border-radius: 50%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    fill: var(--black);
  }

  @media (max-width: 1000px) {
    width: 24px;
    height: 24px;
  }
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

  a:hover {
    opacity: 0.4;
  }

  a {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;

export const Title = styled.h1`
  font-family: "Comfortaa", sans-serif;

  @media (max-width: 1000px) {
    font-size: 1.5em;
    margin-left: 1em;
  }

  @media (max-width: 768px) {
    font-size: 1em;
  }
`;
