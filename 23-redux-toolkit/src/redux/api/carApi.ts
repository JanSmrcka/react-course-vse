import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CarDetailResponse, CarResponse } from "../../types/APIResponseTypes";

export const carApi = createApi({
  reducerPath: "carApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://vse-react-basic.vercel.app/api",
  }),
  endpoints: (builder) => ({
    getCar: builder.query({
      query: (id: string) => ({ url: `cars/${id}` }),
      transformResponse: (response: CarDetailResponse) => response,
    }),
    getCarList: builder.query({
      query: ({
        model,
        location,
        brand,
      }: {
        model: string;
        location: string;
        brand: string;
      }) => ({ url: `cars`, params: { model, location, brand } }),
      transformResponse: (response: CarResponse[]) => response,
    }),
    getModelList: builder.query({
      query: ({ brand }: { brand: string }) => ({
        url: `models`,
        params: { brand },
      }),
      transformResponse: (response: string[]) => response,
    }),
  }),
});

export const { useGetCarQuery, useGetCarListQuery, useGetModelListQuery } =
  carApi;
