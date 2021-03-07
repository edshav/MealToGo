import * as React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { Restaurant } from "../interfaces";

const StyledCover = styled(Card.Cover)`
  padding: ${props => props.theme.space[3]};
  background-color: #fff;
`;

const StyledCard = styled(Card)`
  background-color: #fff;
`;

const Info = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const Title = styled.Text`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.heading};
  font-size: ${props => props.theme.fontSizes.body};
`;
const Address = styled.Text`
  color: ${props => props.theme.colors.text.primary};
  font-family: ${props => props.theme.fonts.body};
  font-size: ${props => props.theme.fontSizes.caption};
`;

type Props = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard: React.FC<Props> = ({
  restaurant: { name, photos, address },
}) => {
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};
