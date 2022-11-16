import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { removeDuplicates } from "../utils/utils";
import { Card, SingleCard } from "../models/models";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
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
      transformResponse(response: Card[]) {
        const filteredResp = response.filter((card: Card) => card.img);
        return removeDuplicates(filteredResp);
      },
    }),
    getSingleCard: build.query<SingleCard[], string | undefined>({
      query: (id: string) => ({
        url: `cards/${id}`,
        method,
        headers,
      }),
    }),
  }),
});

export const { useSearchCardsQuery, useGetSingleCardQuery } = cardsApi;
