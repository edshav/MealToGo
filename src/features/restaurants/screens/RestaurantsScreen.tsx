import * as React from "react";
import styled from "styled-components/native";
import {
  SafeAreaView,
  StatusBar,
  NativeSyntheticEvent,
  TextInputChangeEventData,
} from "react-native";
import { Searchbar } from "react-native-paper";
import { Restaurant } from "../interfaces";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard/RestaurantInfoCard";

const restaurant: Restaurant = {
  name: "Some Restaurant",
  icon:
    "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
  photos: [
    "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
  ],
  address: "100 some random street",
  isOpenNow: true,
  rating: 4,
  isClosedTemporarily: true,
};

const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${props => props.theme.colors.bg.primary};
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px;`}
`;

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

const StyledList = styled.View`
  flex: 1;
  padding: ${props => props.theme.space[3]};
  background-color: ${props => props.theme.colors.bg.secondary};
`;

export const RestaurantsScreen: React.FC = () => {
  const [term, setTerm] = React.useState("");
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTerm(e.nativeEvent.text);
  };

  return (
    <Container>
      <SearchContainer>
        <Searchbar value={term} onChange={onChange} />
      </SearchContainer>
      <StyledList>
        <RestaurantInfoCard restaurant={restaurant} />
      </StyledList>
    </Container>
  );
};
