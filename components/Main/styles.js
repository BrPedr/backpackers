import styled from "styled-components";

export const StyledMain = styled.main`
  grid-area: SP;


  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.015em;
  }
`;

export const Divider = styled.div`
  width: 14em;
  height: 0.2em;

  background: var(--primary);

  margin: 0.2em 0 2em 1em;
`;
