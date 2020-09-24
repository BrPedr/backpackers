import styled from "styled-components";

export const Container = styled.section`
  grid-area: SP;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Montserrat", sans-serif;

  @media (max-width: 1000px) {
    .setDisplay {
      display: none;
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.015em;

    padding-bottom: 1em;
  }
`;

export const SectionCall = styled.div`
  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  text-transform: uppercase;

  color: var(--grey);

  text-align: ${(props) => (props.primary ? "left" : "right")};
`;

export const PricingCardsContainer = styled.div`
  width: 1060px;
  height: 463px;

  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 0 8em;

  background-color: rgba(234, 165, 139, 0.21);
  border-radius: 50px;

  @media (max-width: 1300px) {
    width: 100%;
    padding: 0 2em;
    flex-wrap: wrap;
  }

  @media (max-width: 1000px) {
    display: none;
  }
`;
