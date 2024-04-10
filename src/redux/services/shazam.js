import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


    export const shazamApi = createApi({
        reducerPath: 'shazamApi',
        baseQuery: fetchBaseQuery({
          baseUrl: 'https://shazam.p.rapidapi.com',
          prepareHeaders: () => {
            const headers = new Headers();
            headers.set('X-RapidAPI-key', '7497862f94mshe2ac510022a674dp1e3c55jsna47c2a1a46e5');

            return headers;
          },
        }),
        endpoints: (builder) => ({
          getTopCharts: builder.query({ query: () => '/charts/track'}),
          getSongDetails: builder.query({ query: ({ songid }) => `/songs/v2/get-details?track_id=${songid}`}),

        }),
      
    });

    export const {
      useGetTopChartsQuery,
      useGetSongDetailsQuery,
    } = shazamApi;