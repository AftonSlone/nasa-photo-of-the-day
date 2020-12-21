import React from "react";

export default function Image(props) {
  const { img, mediaType } = props;
  if (mediaType === "video") return <iframe src={img} allowFullScreen="true" />;
  return <img src={img} />;
}
