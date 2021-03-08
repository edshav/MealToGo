export type Restaurant = {
  name: string;
  icon: string;
  photos: string[];
  address: string;
  isOpenNow: boolean;
  rating: 1 | 2 | 3 | 4 | 5;
  isClosedTemporarily: boolean;
};
