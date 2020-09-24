import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  width: calc(100% + 25px);
  height: 100%;
`;

export const Icons = styled.svg`
  width: 58px;
  height: 55px;

  position: relative;

  background: var(--white);

  border-radius: 50%;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  margin-right: ${(props) => (props.primary ? "none" : "10px")};

  svg {
    fill: var(--primary);
  }

  @media (max-width: 1000px) {
    width: 47px;
    height: 44px;

    align-items: center;
  }

  @media (max-width: 481px) {
    width: 50px;
    height: 44px;

    align-items: center;
  }
`;

export const TopicDescription = styled.div`
  font-family: "Comfortaa", sans-serif;

  width: 100%;

  margin-left: ${(props) => (props.secondary ? null : "20px")};
  margin-right: ${(props) => (props.secondary ? "20px" : null)};
  margin-bottom: 0.6em;

  @media (max-width: 481px) {
    padding-left: ${(props) => (props.secondary ? null : "20px")};
  }

  h2 {
    font-weight: bold;
    font-size: 24px;
    line-height: 27px;

    margin-bottom: 0.3em;

    @media (max-width: 1300px) {
      font-size: 20px;
      white-space: wrap;
      width: 100%;
    }

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  h3 {
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;

    @media (max-width: 1000px) {
      font-size: 15px;
      width: 450px;
    }

    @media (max-width: 768px) {
      width: 350px;
    }
    @media (max-width: 481px) {
      width: 250px;

      margin-right: ${(props) => (props.secondary ? "-30px" : null)};
    }
  }
`;
