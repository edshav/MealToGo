import * as React from "react";
import styled from "styled-components/native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Restaurant } from "../interfaces";
import star from "assets/star";

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

const Rating = styled.View`
  flex-direction: row;
  padding-top: ${props => props.theme.space[2]};
  padding-bottom: ${props => props.theme.space[2]};
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
  restaurant: { name, photos, address, rating },
}) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
      <Info>
        <Title>{name}</Title>
        <Rating>
          {ratingArray.map((_el, i) => (
            <SvgXml key={i} xml={star} width={20} height={20} />
          ))}
        </Rating>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};
