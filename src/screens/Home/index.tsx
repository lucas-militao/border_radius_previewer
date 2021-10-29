import React, { useState } from "react";

import { Clipboard } from "react-native";
import { BorderSliderControl } from "../../components/BorderSliderControl";

import { Box } from "../../components/Box";
import { CssBoard } from "../../components/CssBoard";

import {
  Container,
  HorizontalContainer,
  Title,
  BoxControlContainer,
} from './styles'

export function Home() {
  const [borderTopLeft, setBorderTopLeft] = useState(0);
  const [borderTopRight, setBorderTopRight] = useState(0);
  const [borderBottomLeft, setBorderBottomLeft] = useState(0);
  const [borderBottomRight, setBorderBottomRight] = useState(0);
  

  function handleCopyToClipboardCssCode() {
    Clipboard.setString(`border-top-left-radius: ${(borderTopLeft * 100).toFixed(2)}%
border-top-right-radius: ${(borderTopRight * 100).toFixed(2)}%
border-bottom-left-radius: ${(borderBottomLeft * 100).toFixed(2)}%
border-bottom-right-radius: ${(borderBottomRight * 100).toFixed(2)}%
    `);
  }

  return (
    <Container>
      <Title>Border Radius Previewer</Title>

      <BoxControlContainer>
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
      </BoxControlContainer>

      <CssBoard 
        borderBottomLeft={borderBottomLeft}
        borderBottomRight={borderBottomRight}
        borderTopLeft={borderTopLeft}
        borderTopRight={borderTopRight}
        copyToClipBoard={handleCopyToClipboardCssCode}
      />
    </Container>
  );
}