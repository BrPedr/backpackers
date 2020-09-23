import styled from "styled-components";

export const Container = styled.section`
  grid-area: UL;

  margin: 5em 5% 0 10%;

  display: flex;
  justify-content: space-around;

  font-family: Montserrat;

  a {
    color: var(--grey);
  }

  a,
  h3 {
    font-weight: 600;
    font-size: 14px;
    line-height: 228.4%;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;

  padding-bottom: 1em;
`;

export const Icon = styled.div``;
