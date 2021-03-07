import * as React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Restaurant } from "../interfaces";

const Title = styled.Text`
  padding: ${props => props.theme.space[3]};
  color: ${props => props.theme.colors.text.primary};
`;

const StyledCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: #fff;
`;

const StyledCard = styled(Card)`
  background-color: #fff;
`;

type Props = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard: React.FC<Props> = ({
  restaurant: { name, photos },
}) => {
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </StyledCard>
  );
};
