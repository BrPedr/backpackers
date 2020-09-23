import React from "react";

import { Container, LinksContainer, Title, ButtonsContainer } from "./styles";
import Button from "../Button";

const NavBar = () => {
  return (
    <Container>
      <Title>Backpackers</Title>
      <LinksContainer>
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Community</a>
        <a href="#">Support</a>
      </LinksContainer>
      <ButtonsContainer>
        <Button color={"primary"}>Log in</Button>
        <Button>Register</Button>
      </ButtonsContainer>
    </Container>
  );
};

export default NavBar;
