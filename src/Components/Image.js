import React from "react";
import styled, { keyframes } from "styled-components";
const Kf = keyframes`
100% {
  opacity: 1;
}

`;

const StyledImg = styled.img`
  opacity: 0;
  animation: ${Kf} 0.5s ease-in-out forwards;
  padding: ${(pr) => pr.theme.padding.small};
  width: 80%;
`;

export default function Image(props) {
  const { img, mediaType } = props;
  if (mediaType === "video") {
    return <iframe src={img} allowFullScreen="true" />;
  }
  return <StyledImg src={img} />;
}
