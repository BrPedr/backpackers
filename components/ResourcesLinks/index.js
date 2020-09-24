import React from "react";

import { Container, LinksWrapper, Title, Icon } from "./styles";

const ResourcesLinks = () => {
  return (
    <Container>
      <LinksWrapper>
        <Title>Company</Title>
        <a href="#">Career</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <a href="#">Press Info</a>
        <a href="#">Features</a>
        <a href="#">Successes</a>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Backpackers</Title>
        <a href="#">Why Backpackers</a>
        <a href="#">Enterprise</a>
        <a href="#">Customer Stories</a>
        <a href="#">Pricing</a>
        <a href="#">Security</a>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Resources</Title>
        <a href="#">Download</a>
        <a href="#">Help Center</a>
        <a href="#">Guides</a>
        <a href="#">Events</a>
        <a href="#">Developers</a>
        <a href="#">App Directory</a>
        <a href="#">Partners</a>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Extras</Title>
        <a href="#">Podcast</a>
        <a href="#">Backpackers Shop</a>
        <a href="#">Backpackers at Work</a>
        <a href="#">Backpackers Fund</a>
        <a href="#">Integrations</a>
      </LinksWrapper>
      <LinksWrapper>
        <Title>Subscribe</Title>
        {/* <input></input> */}
        <h3>9/10</h3>
        <h3>Overall rating</h3>
        <Icon></Icon>
      </LinksWrapper>
    </Container>
  );
};

export default ResourcesLinks;
