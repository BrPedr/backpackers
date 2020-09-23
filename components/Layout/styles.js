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

  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 82px 646px auto 408px 82px;

  grid-template-areas:
    "NB NB NB NB"
    "BT BT BT BT"
    /* "BS BS BI BI"
    "ST ST ST ST"
    "SI SI SP SP"
    "SP SP SI SI"
    "SI SI SP SP"
    "ST ST ST ST"
    "PC PC PC PC" */
    /* "ST ST ST ST" */
    "SP SP SP SP"
    "UL UL UL UL"
    "FT FT FT FT";

  width: 100vw;
  height: 100vh;
`;
