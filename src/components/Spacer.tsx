import styled, { DefaultTheme } from "styled-components/native";

type SpacerDirection = "top" | "right" | "bottom" | "left";
type SpacerSize = "sm" | "md" | "lg";
type SpacerMargin =
  | "margin-top"
  | "margin-right"
  | "margin-bottom"
  | "margin-left";

type Props = {
  direction?: SpacerDirection;
  size?: SpacerSize;
};

const directionVariant: Record<SpacerDirection, SpacerMargin> = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const sizeVariant: Record<SpacerSize, 1 | 2 | 3> = {
  sm: 1,
  md: 2,
  lg: 3,
};

const getVariant = (
  { direction = "top", size = "sm" }: Props,
  theme: DefaultTheme,
) => `${directionVariant[direction]}: ${theme.space[sizeVariant[size]]}`;

export const Spacer = styled.View<Props>`
  ${({ direction, size, theme }) => getVariant({ direction, size }, theme)}
`;
