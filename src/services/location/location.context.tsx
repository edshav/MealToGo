import * as React from "react";
import { RestaurantLocation } from "services/restaurants/restaurants.interfaces";
import { locationRequest, locationTransform } from "./location.service";

export const LocationContext = React.createContext<{
  location: RestaurantLocation;
  loading: boolean;
  error?: string;
  onSearch: (searchKeyword: string) => void;
  keyword: string;
}>({
  location: {
    lat: null,
    lng: null,
  },
  loading: false,
  error: undefined,
  onSearch: () => null,
  keyword: "",
});

export const LocationContextProvider: React.FC = ({ children }) => {
  const [location, setLocation] = React.useState<RestaurantLocation>({
    lat: null,
    lng: null,
  });
  const [keyword, setKeyword] = React.useState("San Francisco");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const onSearch = async (searchKeyword: string = "Antwerp") => {
    if (!searchKeyword) {
      return;
    }
    setLoading(true);
    setKeyword(searchKeyword);
    setTimeout(async () => {
      try {
        const data = await locationRequest(searchKeyword.toLowerCase());
        setLoading(false);
        console.log(locationTransform(data));
        setLocation(locationTransform(data));
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    }, 3000);
  };

  return (
    <LocationContext.Provider
      value={{ location, keyword, loading, error, onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
