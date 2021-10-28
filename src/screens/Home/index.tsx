import React, { useState } from "react";
import { BorderSliderControl } from "../../components/BorderSliderControl";

import { Box } from "../../components/Box";

import {
  Container,
  HorizontalContainer
} from './styles'

export function Home() {
  const [borderTopLeft, setBorderTopLeft] = useState(0);
  const [borderTopRight, setBorderTopRight] = useState(0);
  const [borderBottomLeft, setBorderBottomLeft] = useState(0);
  const [borderBottomRight, setBorderBottomRight] = useState(0);


  return (
    <Container>
      <BorderSliderControl 
        value={borderTopLeft}
        setValue={setBorderTopLeft}
      />
      <HorizontalContainer>
        <BorderSliderControl 
          horizontal
          value={borderBottomLeft}
          setValue={setBorderBottomLeft}
        />
        <Box
          borderTopLeft={borderTopLeft}
          borderTopRight={borderTopRight}
          borderBottomLeft={borderBottomLeft}
          borderBottomRight={borderBottomRight}
        /> 
        <BorderSliderControl 
          horizontal
          inverted
          value={borderTopRight}
          setValue={setBorderTopRight}
        />
      </HorizontalContainer>
      <BorderSliderControl
        inverted
        value={borderBottomRight}
        setValue={setBorderBottomRight}
      />
    </Container>
  );
}