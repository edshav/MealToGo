import * as React from "react";
import { Restaurant } from "./restaurants.interfaces";
import {
  restaurantsRequest,
  restaurantsTransform,
} from "./restaurants.service";

export const RestaurantsContext = React.createContext<{
  restaurants: Restaurant[];
  loading: boolean;
  error?: string;
}>({ restaurants: [], loading: false, error: undefined });

export const RestaurantsContextProvider: React.FC = ({ children }) => {
  const [restaurants, setRestaurants] = React.useState<Restaurant[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string>();
  React.useEffect(() => {
    const retrieveRestaurants = async () => {
      try {
        setLoading(true);
        setTimeout(async () => {
          const data = await restaurantsRequest();
          setLoading(false);
          setRestaurants(restaurantsTransform(data));
        }, 3000);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    retrieveRestaurants();
  }, []);
  return (
    <RestaurantsContext.Provider value={{ restaurants, loading, error }}>
      {children}
    </RestaurantsContext.Provider>
  );
};
