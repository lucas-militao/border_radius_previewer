import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;

  
  margin-bottom: 16px;
`;

export const BoxControlContainer = styled.View`
  width: 100%;

  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const HorizontalContainer = styled.View`
  width: 100%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;