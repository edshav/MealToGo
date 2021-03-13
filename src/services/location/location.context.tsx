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
  const [keyword, setKeyword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();

  const onSearch = async (searchKeyword: string = "Antwerp") => {
    try {
      setLoading(true);
      setKeyword(searchKeyword);
      setTimeout(async () => {
        const data = await locationRequest(searchKeyword.toLowerCase());
        setLoading(false);
        setLocation(locationTransform(data));
      }, 3000);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <LocationContext.Provider
      value={{ location, keyword, loading, error, onSearch }}
    >
      {children}
    </LocationContext.Provider>
  );
};
