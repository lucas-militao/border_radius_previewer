import React from "react";
import { BorderSliderControl } from "../../components/BorderSliderControl";

import { Box } from "../../components/Box";

import {
  Container,
  HorizontalContainer
} from './styles'

export function Home() {

  return (
    <Container>
      <BorderSliderControl />
      <HorizontalContainer>
        <BorderSliderControl 
          horizontal
        />
        <Box /> 
        <BorderSliderControl 
          horizontal
          inverted
        />
      </HorizontalContainer>
      <BorderSliderControl
        inverted
      />
    </Container>
  );
}