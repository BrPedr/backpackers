import styled from "styled-components";

export const PricingCard = styled.div`
  width: 228px;
  height: 385px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 1em 2em;

  background-color: var(--white);
  box-shadow: 0px 2px 10px 3px rgba(0, 0, 0, 0.12);
  border-radius: 41px;
`;

export const Icon = styled.div`
  color: var(--senary);git
`;

export const ValueContainer = styled.div`
  display: flex;
  align-items: baseline;

  h3 {
    font-size: 0.9em;
    color: var(--grey);
  }
`;

export const Value = styled.h2`
  font-size: 24px;
  font-weight: bold;
  line-height: 17px;
`;

export const Plan = styled.div`
  h3 {
    padding-bottom: 1em;
    font-size: 14px;
    line-height: 17px;
    padding-top: 1em;
  }

  h4 {
    color: var(--grey);
    font-weight: bold;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    padding-bottom: 1em;
  }
`;

export const Divider = styled.div`
  width: 100%;
  height: 0.1em;

  background: var(--grey);
`;
export const PerksList = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 2 150px;

  h4 {
    color: var(--greyVariant);

    font-weight: 600;
    font-size: 11px;
    line-height: 13px;

    padding-bottom: 1em;
    margin-left: 0.4em;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
