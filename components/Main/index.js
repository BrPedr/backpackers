import React from "react";

import { data } from "../../data";

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
import Camping from "../../animations/Camping";

import { StyledMain, Divider } from "./styles";

const Main = () => {
  const textCall = data.titles.section.call;
  const { subtitle } = data.titles.section;
  const { perks } = data.titles.section;

  return (
    <StyledMain>
      <h1>{data.titles.section.title[0]}</h1>
      <Divider />

      <Perks
        primary
        imageUrl={"/images/drawkit-transport-scene-3.svg"}
        callText={textCall[0]}
        title={subtitle[0]}
      >
        <PerksText
          primary
          topicTitle={perks.title[0]}
          topicText={perks.description[0]}
        >
          <MdMap />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[1]}
          topicText={perks.description[1]}
        >
          <MdContentPaste />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[2]}
          topicText={perks.description[2]}
        >
          <MdAccessTime />
        </PerksText>
      </Perks>

      <Perks
        className="hidden"
        imageUrl={"/images/wfh_9.svg"}
        callText={textCall[1]}
        title={subtitle[1]}
      >
        <PerksText topicTitle={perks.title[3]} topicText={perks.description[3]}>
          <MdShare />
        </PerksText>
        <PerksText topicTitle={perks.title[4]} topicText={perks.description[4]}>
          <MdSend />
        </PerksText>
        <PerksText topicTitle={perks.title[5]} topicText={perks.description[5]}>
          <MdFavoriteBorder />
        </PerksText>
      </Perks>

      <Perks
        primary
        imageUrl={"/images/wfh_9.svg"}
        callText={textCall[1]}
        title={subtitle[1]}
        className="reverse-hidden reverse-hidden-image"
      >
        <PerksText
          primary
          topicTitle={perks.title[3]}
          topicText={perks.description[3]}
        >
          <MdShare />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[4]}
          topicText={perks.description[4]}
        >
          <MdSend />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[5]}
          topicText={perks.description[5]}
        >
          <MdFavoriteBorder />
        </PerksText>
      </Perks>

      <Perks
        primary
        imageUrl={"/images/camping.svg"}
        callText={textCall[2]}
        title={subtitle[2]}
      >
        <PerksText
          primary
          topicTitle={perks.title[6]}
          topicText={perks.description[6]}
        >
          <MdMyLocation />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[7]}
          topicText={perks.description[7]}
        >
          <MdSentimentSatisfied />
        </PerksText>
        <PerksText
          primary
          topicTitle={perks.title[8]}
          topicText={perks.description[8]}
        >
          <MdLockOutline />
        </PerksText>
      </Perks>

      <PricingBox />
    </StyledMain>
  );
};

export default Main;
