import styled from "styled-components";

export const StyledButton = styled.button`
  width: 125px;
  height: 40px;

  background-color: ${(props) =>
    props.color === "primary"
      ? "var(--white)"
      : props.color === "secondary"
      ? "var(--button)"
      : "var(--quaternary)"};

  color: ${(props) =>
    props.color === "primary" ? "var(--black)" : "var(--white)"};

  border: ${(props) =>
    props.color === "primary" ? "2px solid var(--button)" : null};
  border-radius: 6px;

  font-size: 15px;
  font-weight: medium;
  text-justify: center;
`;
