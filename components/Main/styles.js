import styled from "styled-components";

export const StyledMain = styled.main`
  grid-area: SP;

  display: flex;
  margin-top: 3em;

  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  .reverse-hidden,
  .reverse-hidden-image {
    display: none;
  }

  @media (max-width: 1300px) {
    .hidden {
      display: none;
    }
    .reverse-hidden,
    .reverse-hidden-image {
      display: block;
    }
  }

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.5em;
    line-height: 40px;
    text-align: center;
    letter-spacing: -0.015em;

    @media (max-width: 768px) {
      font-size: 2.5rem;
    }

    @media (max-width: 481px) {
      font-size: 1.3rem;
    }
  }
`;

export const Divider = styled.div`
  width: 14em;
  height: 0.2em;

  background: var(--primary);

  margin: 0.2em 0 2em 1em;

  @media (max-width: 768px) {
    width: 10em;
  }

  @media (max-width: 481px) {
    width: 8em;

    margin: 0.2em 0 2em 0;
  }
`;
