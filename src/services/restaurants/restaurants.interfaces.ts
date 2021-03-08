export type PhotoDocument = {
  height?: number | null;
  html_attributions?: unknown[] | null;
  photo_reference?: string | null;
  width?: number | null;
};

export type RestaurantDocument = {
  business_status: "OPERATIONAL" | "CLOSED_TEMPORARILY" | null;
  geometry?: {
    location?: {
      lat?: number | null;
      lng?: number | null;
    } | null;
    viewport?: {
      northeast?: {
        lat?: number | null;
        lng?: number | null;
      } | null;
      southwest?: {
        lat?: number | null;
        lng?: number | null;
      } | null;
    } | null;
  } | null;
  icon?: string | null;
  name: string;
  opening_hours?: {
    open_now?: boolean | null;
  } | null;
  photos?: PhotoDocument[] | null;
  place_id: string;
  rating?: number | null;
  reference?: string | null;
  user_ratings_total?: number | null;
  vicinity?: string | null;
};

export type RestaurantsResponse = {
  html_attributions: unknown[];
  next_page_token: string;
  results: RestaurantDocument[];
  status: string;
};

export type Photo = Required<PhotoDocument>;

export type Restaurant = Required<RestaurantDocument> & {
  isOpenNow: boolean;
  isClosedTemporarily: boolean;
  photos: Photo[];
};
