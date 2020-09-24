import styled from "styled-components";

export const Container = styled.section`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 100%;

  margin-bottom: 2em;

  display: ${(props) => (props.perksForMobile ? "none" : null)};

  @media (max-width: 1300px) {
    flex-direction: column;
    margin-bottom: 2.5em;
  }

  @media (max-width: 481px) {
    margin-bottom: 4em;
  }
`;

export const StyledImage = styled.img`
  max-width: 700px;
  height: auto;


  @media (max-width: 1300px) {
    margin-bottom: 2.5em;
    width: 100%;
  }
  @media (max-width: 481px) {
    margin-bottom: ${(props) => (props.primary ? null : "-3em")};
    margin-top: ${(props) => (props.primary ? null : "2em")};

    width: 110%;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: ${(props) => (props.primary ? "flex-start" : "flex-end")};
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

  @media (max-width: 1300px) {
    font-size: 20px;
  }
`;

export const SectionTitle = styled.h2`
  height: 85px;

  font-family: "Comfortaa", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;

  padding: 0 0 30px 0;
  margin-bottom: 20px;

  text-align: ${(props) => (props.primary ? "left" : "right")};

  @media (max-width: 1400px) {
    font-size: 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
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

  text-align: ${(props) => (props.primary ? "left" : "right")};
`;
