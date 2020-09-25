import styled from "styled-components";

// NB - NavBar
// BT - Banner Title
// BS - Banner Subtitle
// BI - Banner Illustration
// ST - Section Title
// SI - Section Illustration
// SP - Section Perks
// PC - Pricing Cards
// UL - Utilities Links
// FT - Footer

export const Grid = styled.div`
  display: grid;

  grid-template-columns: 10% repeat(4, 20%) 10%;
  grid-template-rows: 82px 646px auto auto 82px;

  grid-template-areas:
    "NB NB NB NB NB NB"
    ". BT BT BT BT ."
    ". SP SP SP SP ."
    "UL UL UL UL UL UL"
    "FT FT FT FT FT FT";

  width: 100%;
  height: 100vh;

  margin: 0;
  padding: 0;

  @media (max-width: 1000px) {
    grid-template-rows: 82px 440px auto auto 82px;
  }

  @media (max-width: 768px) {
    grid-template-rows: 32px 340px auto auto 82px;
  }

  @media (max-width: 481px) {
    grid-template-rows: 32px 200px auto auto 42px;
  }
`;
