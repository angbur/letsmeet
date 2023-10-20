import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Agenda } from '@store/agendaSlice';

export const agendaApi = createApi({
  reducerPath: 'agendaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.npoint.io/e0d2bc2929c9158f2398',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllAgendas: builder.query<{ data: Agenda[] }, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetAllAgendasQuery } = agendaApi;
