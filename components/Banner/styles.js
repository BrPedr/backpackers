import styled from "styled-components";

export const Container = styled.div`
  grid-area: BT;
  align-items: start;
  justify-items: center;

  display: grid;
  grid-template-columns: subgrid;
  grid-template-rows: repeat(2, 40%) 20%;

  background: url("/images/ShapeBanner.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: 130% 230%;

  margin-top: 80px;

  @media (max-width: 1000px) {
    margin-top: 50px;
    grid-template-rows: repeat(5, 20%);
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 481px) {
    margin-top: 30px;
    grid-template-rows: 30% repeat(2, 35%);
  }
`;

export const Title = styled.div`
  font-family: "Comfortaa", sans-serif;
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-weight: bold;
  font-size: 4rem;
  line-height: 1.1em;

  span {
    text-decoration: underline;
    text-decoration-color: var(--primary);
    text-decoration-thickness: 4px;
  }

  @media (max-width: 1400px) {
    font-size: 3rem;
    /* grid-column: 1 / 4; */
  }

  @media (max-width: 1000px) {
    grid-column: 1 / 5;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 481px) {
    font-size: 1.5rem;
  }
`;

export const Subtitle = styled.h3`
  font-family: "Comfortaa", sans-serif;

  justify-items: end;

  padding-left: 2em;

  font-style: normal;
  font-weight: 500;
  font-size: 28.4444px;
  line-height: 32px;

  grid-column: 1 / 3;
  grid-row: 2 / 4;

  @media (max-width: 1400px) {
    font-size: 20px;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / 5;
    grid-row: 3 / 4;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    grid-row: 3 / 4;
  }

  @media (max-width: 481px) {
    font-size: 15px;
    grid-row: 2 / 4;
    text-align: right;
  }
`;

export const StyledImage = styled.img`
  width: 653px;
  height: 583px;

  grid-column: 3 / 5;
  grid-row: 1 / 3;

  @media (max-width: 1400px) {
    width: 453px;
    height: 383px;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
