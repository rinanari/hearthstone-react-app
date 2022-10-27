import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Card } from "../models/models";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "1a3f815ffamsh6ec015425362b7bp141b9ajsnb3c80a13ff3c",
    "X-RapidAPI-Host": "omgvamp-hearthstone-v1.p.rapidapi.com",
  },
};
const { method, headers } = options;

export const cardsApi = createApi({
  reducerPath: "cardsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://omgvamp-hearthstone-v1.p.rapidapi.com",
  }),
  endpoints: (build) => ({
    searchCards: build.query<Card[], string>({
      query: (query: string) => ({
        url: `cards/search/${query}`,
        method,
        headers,
      }),
    }),
  }),
});

export const { useSearchCardsQuery } = cardsApi;
