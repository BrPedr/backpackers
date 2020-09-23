import React from "react";

import {
  Container,
  StyledImage,
  TextContainer,
  SectionCall,
  SectionTitle,
  Divider,
  TopicsContainer,
} from "./styles";

const Perks = ({ primary, imageUrl, children, callText, title }) => {
  return (
    <Container>
      {primary ? (
        <>
          <StyledImage primary src={imageUrl} alt="Illustration" />
          <TextContainer primary>
            <SectionCall primary>{callText}</SectionCall>
            <SectionTitle primary>{title}</SectionTitle>
            <Divider />
            <TopicsContainer primary>{children}</TopicsContainer>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer>
            <SectionCall>{callText}</SectionCall>
            <SectionTitle>{title}</SectionTitle>
            <Divider />
            <TopicsContainer>{children}</TopicsContainer>
          </TextContainer>
          <StyledImage src={imageUrl} alt="Illustration" />
        </>
      )}
    </Container>
  );
};

export default Perks;
