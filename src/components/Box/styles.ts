import styled, { css } from "styled-components/native";

interface Props {
  boxWidth: number,
  boxHeight: number,
  borderTopLeft: number,
  borderTopRight: number,
  borderBottomLeft: number,
  borderBottomRight: number,
}

export const Container = styled.View<Props>`
  ${({ boxWidth, boxHeight, borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight }) => css`
    width: ${boxWidth}px;
    height: ${boxHeight}px;
    border-top-left-radius: ${borderTopLeft * boxWidth}px;
    border-top-right-radius: ${borderTopRight * boxWidth}px;
    border-bottom-left-radius: ${borderBottomLeft * boxWidth}px;
    border-bottom-right-radius: ${borderBottomRight * boxWidth}px;
  `}


  background-color: blue;

`;