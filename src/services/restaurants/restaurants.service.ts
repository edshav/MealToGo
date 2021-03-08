import { mockImages, mocks } from "./mock";
import {
  Photo,
  PhotoDocument,
  Restaurant,
  RestaurantDocument,
  RestaurantsResponse,
} from "./restaurants.interfaces";

const initializePotos = (
  photosDocumentList?: PhotoDocument[] | null,
): Photo[] => {
  if (!photosDocumentList) return [];
  return photosDocumentList.map(photoDoc => ({
    height: photoDoc.height ?? null,
    html_attributions: photoDoc.html_attributions ?? null,
    photo_reference:
      mockImages[Math.ceil(Math.random() * (mockImages.length - 1))],
    width: photoDoc.width ?? null,
  }));
};

export const restaurantsTransform = ({
  results = [],
}: {
  results: RestaurantDocument[];
}): Restaurant[] => {
  const restaurants = results.map(restaurant => ({
    business_status: restaurant.business_status ?? null,
    geometry: {
      location: {
        lat: restaurant.geometry?.location?.lat ?? null,
        lng: restaurant.geometry?.location?.lat ?? null,
      },
      viewport: {
        northeast: {
          lat: restaurant.geometry?.viewport?.northeast?.lat ?? null,
          lng: restaurant.geometry?.viewport?.northeast?.lng ?? null,
        },
        southwest: {
          lat: restaurant.geometry?.viewport?.southwest?.lat ?? null,
          lng: restaurant.geometry?.viewport?.southwest?.lng ?? null,
        },
      },
    },
    icon: restaurant.icon ? restaurant.icon : null,
    name: restaurant.name,
    opening_hours: {
      open_now: restaurant.opening_hours?.open_now ?? null,
    },
    photos: initializePotos(restaurant.photos),
    place_id: restaurant.place_id,
    rating: restaurant.rating ?? null,
    reference: restaurant.reference ?? null,
    user_ratings_total: restaurant.user_ratings_total ?? null,
    vicinity: restaurant.vicinity ?? null,
    isOpenNow: !!restaurant.opening_hours?.open_now,
    isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
  }));
  return restaurants;
};

export const restaurantsRequest = (
  location: string = "37.7749295,-122.4194155",
): Promise<RestaurantsResponse> => {
  return new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
