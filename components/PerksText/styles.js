import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: 500px;

  justify-content: space-between;
`;

export const Icons = styled.svg`
  width: 58px;
  height: 59px;

  position: relative;

  background: var(--white);

  border-radius: 50%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  svg {
    fill: var(--primary);
  }
`;

export const TopicDescription = styled.div`
  font-family: "Comfortaa", sans-serif;

  margin-bottom: 0.6em;

  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;

    margin-bottom: 0.3em;
  }

  h3 {
    width: 403px;
    height: 40px;

    text-justify: left;

    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
  }
`;
