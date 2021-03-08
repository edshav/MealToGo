import * as React from "react";
import { SvgXml } from "react-native-svg";
import star from "img/star";
import open from "img/open";
import { Spacer } from "components/Spacer";
import { Typography } from "components/Typography";
import {
  StyledCard,
  StyledCover,
  Info,
  Icon,
  Section,
  SubSection,
  Address,
} from "./styles";
import { Restaurant } from "services/restaurants/restaurants.interfaces";

type Props = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard: React.FC<Props> = ({
  restaurant: {
    name,
    photos,
    rating,
    icon,
    isOpenNow,
    isClosedTemporarily,
    vicinity,
  },
}) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating ?? 0)));
  return (
    <StyledCard elevation={5}>
      <StyledCover
        source={{
          uri:
            photos[0]?.photo_reference ??
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
        }}
      />
      <Info>
        <Typography variant="label">{name}</Typography>
        <Section>
          <SubSection>
            {ratingArray.map((_el, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </SubSection>
          <SubSection>
            {isClosedTemporarily && (
              <Spacer direction="right" size="md">
                <Typography variant="error">CLOSED TEMPORARILY</Typography>
              </Spacer>
            )}
            {isOpenNow && (
              <Spacer direction="right" size="md">
                <SvgXml xml={open} width={20} height={20} />
              </Spacer>
            )}
            {icon && (
              <Icon
                source={{
                  uri: icon,
                }}
              />
            )}
          </SubSection>
        </Section>
        <Address>{vicinity}</Address>
      </Info>
    </StyledCard>
  );
};
