import React from "react";

import { data } from "../../data";

import { Container, TextContainer, StyledImage, Divider } from "./styles";

const Banner = () => {
  return (
    <Container>
      <TextContainer>
        <h2>{data.titles.banner.title}</h2>
        <Divider />
        <h3>
          {data.titles.banner.subtitle}.
        </h3>
      </TextContainer>
      <StyledImage src="/images/04.png" alt="" />
    </Container>
  );
};

export default Banner;
