import React from "react";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";

import { Container, LinksContainer, Title, Icons } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Title>Backpackers</Title>
      <LinksContainer>
        <a href="#">Reviews</a>
        <a href="#">People</a>
        <a href="#">Partners</a>
        <a href="#">Support</a>
      </LinksContainer>
      <div>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineFacebook />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineInstagram />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineTwitter />
        </Icons>
        <Icons alt="symbol" viewBox="-10 -7 35 30">
          <AiOutlineYoutube />
        </Icons>
      </div>
    </Container>
  );
};

export default Footer;
