export type CityLocationDocument = {
  results?:
    | [
        {
          geometry?: {
            location?: {
              lng?: number | null;
              lat?: number | null;
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
        },
      ]
    | null;
} | null;

export type LocationsDorument = Record<string, CityLocationDocument>;
