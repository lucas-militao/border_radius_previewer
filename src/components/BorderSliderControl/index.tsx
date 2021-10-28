import React from "react";

import Slider from '@react-native-community/slider';

import {
  Container
} from './styles'

interface Props {
  horizontal?: boolean;
  inverted?: boolean;
}

export function BorderSliderControl({
  horizontal = false,
  inverted = false
}: Props) {

  return (
    <Container
      horizontal={horizontal}
    >
      <Slider
        style={{width: 200, height: 40}}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FF0000"
        maximumTrackTintColor="#000000"
        inverted={inverted}
      />
    </Container>
  );
}