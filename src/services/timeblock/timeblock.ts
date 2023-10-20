import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Timeblock } from '@store/timeblockSlice';

export const timeblockApi = createApi({
  reducerPath: 'timeblockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.npoint.io/4deca2f9dfc1fa09408f',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTimeblocks: builder.query({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),

    getAllTimeblocksByAgendaId: builder.mutation({
      query: (agendaId: string) => ({
        url: `agenda/${agendaId}/timeblock`,
        method: 'GET',
      }),
    }),
    createTimeblock: builder.mutation({
      query: (timeblock: Timeblock) => ({
        url: 'timeblock',
        method: 'POST',
        body: timeblock,
      }),
    }),
    updateTimeblock: builder.mutation({
      query: (timeblock: Timeblock) => ({
        url: 'timeblock',
        method: 'PUT',
        body: timeblock,
      }),
    }),
  }),
});

export const { useGetAllTimeblocksByAgendaIdMutation, useCreateTimeblockMutation, useUpdateTimeblockMutation } =
  timeblockApi;
