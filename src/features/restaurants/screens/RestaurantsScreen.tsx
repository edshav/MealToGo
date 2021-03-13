import * as React from "react";
import styled from "styled-components/native";
import {
  NativeSyntheticEvent,
  TextInputChangeEventData,
  FlatList,
} from "react-native";
import { Searchbar } from "react-native-paper";
// import { Restaurant } from "../interfaces";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard/RestaurantInfoCard";
import { SafeAria } from "components/SafeAria";
import { RestaurantsContext } from "services/restaurants/restaurants.context";
import { SpinnerAndError } from "components/SpinnerAndError";

// const restaurant: Restaurant = {
//   name: "Some Restaurant",
//   icon:
//     "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
//   photos: [
//     "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
//   ],
//   address: "100 some random street",
//   isOpenNow: true,
//   rating: 4,
//   isClosedTemporarily: true,
// };

const SearchContainer = styled.View`
  padding: ${props => props.theme.space[3]};
`;

export const RestaurantsScreen: React.FC = () => {
  const { restaurants, loading, error } = React.useContext(RestaurantsContext);
  const [term, setTerm] = React.useState("");
  const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    setTerm(e.nativeEvent.text);
  };

  return (
    <SafeAria>
      <SearchContainer>
        <Searchbar value={term} onChange={onChange} />
      </SearchContainer>
      <SpinnerAndError loading={loading} error={error}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={item => item.place_id}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16 }}
        />
      </SpinnerAndError>
    </SafeAria>
  );
};
