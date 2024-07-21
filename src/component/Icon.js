import React from "react";
import SVG from "react-inlinesvg";
export default function Icon({ name, size = 16, ...props }) {
  return <SVG src={name} width={size} height={size} {...props} />;
}
