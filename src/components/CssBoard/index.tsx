import React from "react";

import { 
  Container,
  CssText,
  CopyButton,
  Icon,
} from "./styles";

interface Props {
  borderTopLeft: number,
  borderTopRight: number,
  borderBottomLeft: number,
  borderBottomRight: number,
  copyToClipBoard: () => void,
}

export function CssBoard({
  borderTopLeft,
  borderTopRight,
  borderBottomLeft,
  borderBottomRight,
  copyToClipBoard
}: Props) {
  
  return(
    <Container>
      <CopyButton onPress={copyToClipBoard}>
        <Icon name="copy"/>
      </CopyButton>

      <CssText
        value={`
      border-top-left-radius: ${(borderTopLeft * 100).toFixed(2)}%
      border-top-right-radius: ${(borderTopRight * 100).toFixed(2)}%
      border-bottom-left-radius: ${(borderBottomLeft * 100).toFixed(2)}%
      border-bottom-right-radius: ${(borderBottomRight * 100).toFixed(2)}%
        `}
        numberOfLines={4}
        multiline
        textAlign="left"
        editable={false}
      />
    </Container>
  );
}