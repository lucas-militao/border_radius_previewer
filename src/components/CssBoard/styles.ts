import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  width: 300px;
  height: 150px;

  
  border-radius: 20px;
  background-color: #282c34;

  justify-content: center;
  align-items: center;
`;

export const CssText = styled.TextInput`
  width: 100%;

  padding: 8px;

  color: #4CAF50;
`;

export const CopyButton = styled(BorderlessButton)`
  position: absolute;

  top: 16px;
  right: 16px;
`;

export const Icon = styled(Feather).attrs({
  size: 24,
  color: '#FFFFFF'
})``
