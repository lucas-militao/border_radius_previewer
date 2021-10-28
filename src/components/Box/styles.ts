import styled, { css } from "styled-components/native";

interface Props {
  borderTopLeft: number,
  borderTopRight: number,
  borderBottomLeft: number,
  borderBottomRight: number,
}

export const Container = styled.View<Props>`
  width: 250px;
  height: 250px;

  background-color: blue;

  ${({ borderTopLeft, borderTopRight, borderBottomLeft, borderBottomRight }) => css`
    border-top-left-radius: ${borderTopLeft};
    border-top-right-radius: ${borderTopRight};
    border-bottom-left-radius: ${borderBottomLeft};
    border-bottom-right-radius: ${borderBottomRight};
  `}
`;