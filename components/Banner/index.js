import React from "react";

import { Container, TextContainer, StyledImage, Divider } from "./styles";

const Banner = () => {
  return (
    <Container>
      <TextContainer>
        <h2>There’s a whole world waiting for you. Go see it!</h2>
        <Divider />
        <h3>
          Backpackers is our ultimate travel companion. Carries all the
          information you need while travelling.
        </h3>
      </TextContainer>
      <StyledImage src="/images/04.png" alt="" />
    </Container>
  );
};

export default Banner;
