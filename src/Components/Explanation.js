import React from "react";
import styled, { keyframes } from "styled-components";
const Kf = keyframes`
100% {
  opacity: 1;
}

`;

const StyledExplanation = styled.p`
  opacity: 0;
  animation: ${Kf} 0.5s ease-in-out forwards;
  color: ${(pr) => pr.theme.secondaryColor};
  padding: ${(pr) => pr.theme.padding.small};
`;

export default function Explanation(props) {
  const { explanation } = props;
  return <StyledExplanation>{explanation}</StyledExplanation>;
}
