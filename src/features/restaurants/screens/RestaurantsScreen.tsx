import * as React from "react";
import { FlatList } from "react-native";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard/RestaurantInfoCard";
import { SafeAria } from "components/SafeAria";
import { RestaurantsContext } from "services/restaurants/restaurants.context";
import { SpinnerAndError } from "components/SpinnerAndError";
import { Search } from "../components/RestaurantInfoCard/Search";

export const RestaurantsScreen: React.FC = () => {
  const { restaurants, loading, error } = React.useContext(RestaurantsContext);

  return (
    <SafeAria>
      <Search />
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
