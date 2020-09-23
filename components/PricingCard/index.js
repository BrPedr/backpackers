import React from "react";

import { MdCheck } from "react-icons/md";

import Button from "../Button";

import {
  Divider,
  PricingCard,
  ValueContainer,
  Plan,
  PerksList,
  Icon,
  Value,
  HeaderContainer,
} from "./styles";

const PricingBox = ({ value, typeOfPlan, subtitleOfPlan, children }) => {
  const items = [];

  for (const [index, element] of children.entries()) {
    items.push(
      <div key={index} style={{ display: "flex", alignItems: "flex-start"}}>
        <Icon>
          <MdCheck />
        </Icon>
        <h4>{`${element.props.children}`}</h4>
      </div>
    );
  }

  return (
    <PricingCard>
      <HeaderContainer>
        <ValueContainer>
          <Value>$ {value}</Value>
          <h3>/month</h3>
        </ValueContainer>
        <Plan>
          <h3>{typeOfPlan}</h3>
          <h4>{subtitleOfPlan}</h4>
        </Plan>
        <Divider />
      </HeaderContainer>
      <PerksList>{items}</PerksList>
      <Button color={"primary"}>Get Started</Button>
    </PricingCard>
  );
};

export default PricingBox;
