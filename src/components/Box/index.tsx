import React from "react";

import {
  Container
} from './styles';

interface Props {
  width?: number,
  height?: number,
  borderTopLeft?: number,
  borderTopRight?: number,
  borderBottomLeft?: number,
  borderBottomRight?: number,
}

export function Box({
  width = 250,
  height = 250,
  borderTopLeft = 0,
  borderTopRight = 0,
  borderBottomLeft = 0,
  borderBottomRight = 0,
}: Props) {

  return (
    <Container 
      boxWidth={width}
      boxHeight={height}
      borderTopLeft={borderTopLeft}
      borderTopRight={borderTopRight}
      borderBottomLeft={borderBottomLeft}
      borderBottomRight={borderBottomRight}
    />
  )
}