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
          <StyledImage
            primary
            src={imageUrl}
            alt="Illustration"
            className={`${
              callText === "GET CONNECTED" ? "reverse-hidden-image" : null
            }`}
          />
          <TextContainer
            primary
            className={`${
              callText === "GET CONNECTED" ? "reverse-hidden" : null
            }`}
          >
            <SectionCall primary>{callText}</SectionCall>
            <SectionTitle primary>{title}</SectionTitle>
            <Divider />
            <TopicsContainer primary>{children}</TopicsContainer>
          </TextContainer>
        </>
      ) : (
        <>
          <TextContainer className="hidden">
            <SectionCall>{callText}</SectionCall>
            <SectionTitle>{title}</SectionTitle>
            <Divider />
            <TopicsContainer>{children}</TopicsContainer>
          </TextContainer>
          <StyledImage src={imageUrl} alt="Illustration" className="hidden" />
        </>
      )}
    </Container>
  );
};

export default Perks;
