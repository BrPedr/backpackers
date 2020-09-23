import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 5em;
`;

export const StyledImage = styled.img`
  width: 566px;
  height: 351px;

  margin-left: ${(props) => (props.primary ? "auto" : "none")};

  @media (max-width: 1170px) {
    display: none;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: ${(props) => (props.primary ? "flex-start" : "flex-end")};
  justify-content: space-between;

  margin-right: ${(props) => (props.primary ? "auto" : "none")};
  padding: ${(props) => (props.primary ? "0 30px" : null)};
`;

export const SectionCall = styled.div`
  width: 346px;
  height: 33px;

  font-family: "Montserrat", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;

  text-transform: uppercase;

  color: var(--grey);

  text-align: ${(props) => (props.primary ? "left" : "right")};
`;

export const SectionTitle = styled.h2`
  width: 428px;
  height: 85px;

  font-family: "Comfortaa", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;

  padding: 0 0 30px 0;
  margin-bottom: 20px;

  text-align: ${(props) => (props.primary ? "left" : "right")};
`;

export const Divider = styled.div`
  width: 5em;
  height: 0.2em;

  background: var(--primary);

  margin: -1.5em 0 1em 0;
`;

export const TopicsContainer = styled.div`
  display: flex;

  height: 230px;

  flex-direction: column;
  justify-content: space-between;

  text-align: ${(props) => (props.primary ? "left" : "right")};
`;
