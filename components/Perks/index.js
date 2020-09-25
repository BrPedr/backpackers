import React from "react";

import Camping from "../../animations/Camping"
import Car from "../../animations/Car"
import Communication from "../../animations/Communication";

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
          {/* <Communication /> */}
          {/* <Camping /> */}
          {/* <Car /> */}
          {callText === "PLAN AHEAD" ? (
            <Car />
          ) : callText === "GET CONNECTED" ? (
            <Communication className="reverse-hidden" />
          ) : callText === "DISCOVER NEW PLACES" ? (
            <Camping />
          ) : null}
          {/* <StyledImage
            primary
            src={imageUrl}
            alt="Illustration"
            className={`${
              callText === "GET CONNECTED" ? "reverse-hidden-image" : null
            }`} */}
          {/* /> */}
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
          {callText === "PLAN AHEAD" ? (
            <Car className="hidden" />
          ) : callText === "GET CONNECTED" ? (
            <Communication className="hidden" />
          ) : null}
          {/* <StyledImage src={imageUrl} alt="Illustration" className="hidden" /> */}
        </>
      )}
    </Container>
  );
};

export default Perks;
