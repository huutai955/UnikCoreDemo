import React from "react";
import { Image } from "antd";

export default function ImageComponent({ src, alt, width, height }) {
  return (
    <Image src={src} alt={alt} preview={false} width={width} height={height} />
  );
}
