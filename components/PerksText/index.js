import React from "react";

import { Icons, TopicDescription, Container } from "./styles";

const PerksText = ({ primary, children, topicTitle, topicText }) => {
  return (
    <Container>
      {primary ? (
        <>
          <Icons alt="symbol" viewBox="-10 -7 35 30">
            {children}
          </Icons>
          <TopicDescription>
            <h2>{topicTitle}</h2>
            <h3>{topicText}</h3>
          </TopicDescription>
        </>
      ) : (
        <>
          <TopicDescription>
            <h2>{topicTitle}</h2>
            <h3>{topicText}</h3>
          </TopicDescription>
          <Icons alt="symbol" viewBox="-10 -7 35 30">
            {children}
          </Icons>
        </>
      )}
    </Container>
  );
};

export default PerksText;
