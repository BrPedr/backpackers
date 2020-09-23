import styled from "styled-components";

export const Container = styled.div`
  grid-area: BT;

  background: url("/images/ShapeBanner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 105em 1250px;

  display: flex;
  justify-content: space-evenly;

  margin-top: 80px;

  max-width: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Comfortaa", sans-serif;

  h2 {
    margin-left: 2em;
    top: 16px;

    width: 10em;
    height: 3.6em;

    font-weight: bold;
    font-size: 4rem;
    line-height: 1.1em;
  }

  h3 {
    margin-left: 10em;
    top: 246px;

    width: 559px;
    height: 122px;

    font-style: normal;
    font-weight: 500;
    font-size: 28.4444px;
    line-height: 32px;
  }
`; 

export const StyledImage = styled.img`
  width: 653px;
  height: 583px;

  margin-top: -80px;
  margin-right: 80px;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Divider = styled.div`
  width: 14em;
  height: 0.2em;

  background: var(--primary);

  margin: -1.5em 0 1em 15em;
`;
