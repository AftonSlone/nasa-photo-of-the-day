import React from "react";

import styled, { keyframes } from "styled-components";
const Kf = keyframes`
100% {
  opacity: 1;
}

`;

const StyledTitle = styled.h1`
  opacity: 0;
  animation: ${Kf} 0.5s ease-in-out forwards;
  color: ${(pr) => pr.theme.primaryColor};
  padding: ${(pr) => pr.theme.padding.small};
`;

export default function Title(props) {
  const { title } = props;
  return <StyledTitle>{title}</StyledTitle>;
}
