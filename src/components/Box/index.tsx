import React from "react";

import {
  Container
} from './styles';

interface Props {
  borderTopLeft?: number,
  borderTopRight?: number,
  borderBottomLeft?: number,
  borderBottomRight?: number,
}

export function Box({
  borderTopLeft = 0,
  borderTopRight = 0,
  borderBottomLeft = 0,
  borderBottomRight = 0,
}: Props) {

  return (
    <Container 
      boxWidth={250}
      boxHeight={250}
      borderTopLeft={borderTopLeft}
      borderTopRight={borderTopRight}
      borderBottomLeft={borderBottomLeft}
      borderBottomRight={borderBottomRight}
    />
  )
}