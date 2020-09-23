import React from "react";

import { data } from "../../data";
import PricingCard from "../PricingCard";

import { Container, SectionCall, PricingCardsContainer } from "./styles";

const PricingBox = () => {
  return (
    <Container>
      <SectionCall>PRICING TABLE</SectionCall>
      <h1>{data.titles.section.title[1]}</h1>
      <PricingCardsContainer>
        <PricingCard
          value={"Free"}
          typeOfPlan={"Standard"}
          subtitleOfPlan={"All the basics features for travellers"}
        >
          <div>Organize your travel plans</div>
          <div>Find suggestion of places</div>
          <div>Share your cards with friends</div>
        </PricingCard>
        <PricingCard
          value={"10"}
          typeOfPlan={"Essentials"}
          subtitleOfPlan={"Advanced features for travelling tha are needded"}
        >
          <div>Tracks reward programs</div>
          <div>Save all your documents in one file</div>
          <div>Find alternative flights</div>
          <div>Shows transportation options</div>
        </PricingCard>
        <PricingCard
          value={"39"}
          typeOfPlan={"Premium"}
          subtitleOfPlan={"Access to all the funcionalities of the app"}
        >
          <div>Save all your documents in one file</div>
          <div>Save your payment vouchers and be safe</div>
          <div>Manage your boat, train and plain tickets</div>
          <div>Track the hotels and airbnb’s where you’ll stay</div>
        </PricingCard>
      </PricingCardsContainer>
    </Container>
  );
};

export default PricingBox;
