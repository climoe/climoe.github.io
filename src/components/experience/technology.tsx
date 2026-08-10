import React from "react";
import styled from "styled-components";

const TechnologyStyle = styled.span`
  border: 1px solid var(--cv-color-purple);
  border-radius: 1rem;
  font-size: 1.2rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-top: 0.5rem;
  padding: 0.5rem;
  line-height: 1.6;
`;

export const Technology = ({ name }) => {
  return <TechnologyStyle>{name}</TechnologyStyle>;
};
