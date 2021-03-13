import { RestaurantLocation } from "services/restaurants/restaurants.interfaces";
import { CityLocationDocument } from "./location.interfaces";
import { locations } from "./location.mock";

export const locationRequest = (
  searchTerm: string,
): Promise<CityLocationDocument> => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm as keyof typeof locations];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (
  result: CityLocationDocument,
): RestaurantLocation => {
  const location = result?.results?.[0];
  const geometry = location?.geometry ?? {};
  const lat = geometry.location?.lat ?? null;
  const lng = geometry.location?.lng ?? null;
  return { lat, lng };
};
