import React from "react";

import {
  MdMap,
  MdContentPaste,
  MdAccessTime,
  MdShare,
  MdSend,
  MdFavoriteBorder,
  MdSentimentSatisfied,
  MdMyLocation,
  MdLockOutline,
} from "react-icons/md";

import Perks from "../Perks";
import PerksText from "../PerksText";
import PricingBox from "../PricingBox";

import { StyledMain, Divider } from "./styles";

const Main = () => {
  return (
    <StyledMain>
      <h1>Join the biggest community of backpackers</h1>
      <Divider />
      <Perks
        primary
        imageUrl={"/images/drawkit-transport-scene-3.svg"}
        callText={"PLAN AHEAD"}
        title={"The world is just one click away from you"}
      >
        <PerksText
          primary
          imageUrl={MdMap}
          topicTitle={"Choose Roads"}
          topicText={
            "Create complete travel plans with the maps and places you want to stay"
          }
        >
          <MdMap />
        </PerksText>
        <PerksText
          primary
          topicTitle={"Control The Budget"}
          topicText={
            "Take control of your expenses by managing them inside the app itself"
          }
        >
          <MdContentPaste />
        </PerksText>
        <PerksText
          primary
          topicTitle={"Manage Your Time"}
          topicText={"Define how much time you want to spend on each location"}
        >
          <MdAccessTime />
        </PerksText>
      </Perks>

      <Perks
        imageUrl={"/images/wfh_9.svg"}
        callText={"GET CONNECTED"}
        title={"Meet your friends around the world"}
      >
        <PerksText
          topicTitle={"Share Memories"}
          topicText={
            "Share your log travel with your fellow travellers and get to know them more"
          }
        >
          <MdShare />
        </PerksText>
        <PerksText
          topicTitle={"Share Plans"}
          topicText={
            "Send your cards travels to anyone you want and make a trip together"
          }
        >
          <MdSend />
        </PerksText>
        <PerksText
          topicTitle={"Follow travellers"}
          topicText={"Like and discover places recommended by backpackers"}
        >
          <MdFavoriteBorder />
        </PerksText>
      </Perks>

      <Perks
        primary
        imageUrl={"/images/undraw_camping_noc8.svg"}
        callText={"DISCOVER NEW PLACES"}
        title={"Life is an adventure. Seize it!"}
      >
        <PerksText
          primary
          topicTitle={"Get Suggestions"}
          topicText={
            "See sugestions of places and events to attend based on the cities you are at"
          }
        >
          <MdMyLocation />
        </PerksText>
        <PerksText
          primary
          topicTitle={"Create Events"}
          topicText={"Create an event to gather other backpackers"}
        >
          <MdSentimentSatisfied />
        </PerksText>
        <PerksText
          primary
          topicTitle={"Be Secure"}
          topicText={
            "Be secure sharing your location in real time with anyone you trust"
          }
        >
          <MdLockOutline />
        </PerksText>
      </Perks>

      <PricingBox />
    </StyledMain>
  );
};

export default Main;
