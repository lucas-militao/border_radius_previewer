import styled, { css } from "styled-components/native";

interface Props {
  horizontal?: boolean;
}

export const Container = styled.View<Props>`
  width: 50px;

  ${({ horizontal }) => horizontal && css`
    transform: rotate(-90deg);
  `}

  justify-content: center;
  align-items: center;
`;