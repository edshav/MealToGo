import * as React from "react";
import { SvgXml } from "react-native-svg";
import { Restaurant } from "../../interfaces";
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

type Props = {
  restaurant: Restaurant;
};

export const RestaurantInfoCard: React.FC<Props> = ({
  restaurant: {
    name,
    photos,
    address,
    rating,
    isOpenNow,
    icon,
    isClosedTemporarily,
  },
}) => {
  const ratingArray = Array.from(new Array(Math.ceil(rating)));
  return (
    <StyledCard elevation={5}>
      <StyledCover source={{ uri: photos[0] }} />
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
            <Icon source={{ uri: icon }} />
          </SubSection>
        </Section>
        <Address>{address}</Address>
      </Info>
    </StyledCard>
  );
};
