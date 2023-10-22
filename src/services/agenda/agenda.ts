import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Agenda } from '@store/agendaSlice';

const baseUrl = 'https://letsmeet-35f25f0de361.herokuapp.com';

export const agendaApi = createApi({
  reducerPath: 'agendaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${baseUrl}`,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllAgendas: builder.query<{ data: Agenda[] }, void>({
      query: () => ({
        url: '/get_agendas',
        method: 'GET',
      }),
    }),
    createAgenda: builder.mutation<{ data: Agenda }, Partial<Agenda>>({
      query: (body) => ({
        url: '/create_agenda',
        method: 'POST',
        body,
      }),
    }),
    updateAgenda: builder.mutation<{ data: Agenda }, Partial<Agenda>>({
      query: (body) => ({
        url: '/update_agenda',
        method: 'PUT',
        body,
      }),
    }),
    deleteAgenda: builder.mutation<{ data: Agenda }, Partial<Agenda>>({
      query: (body) => ({
        url: '/delete_agenda',
        method: 'DELETE',
        body,
      }),
    }),
    getAgendaById: builder.query<{ data: Agenda }, string>({
      query: (id) => ({
        url: `/get_agenda/${id}`,
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useGetAllAgendasQuery,
  useCreateAgendaMutation,
  useUpdateAgendaMutation,
  useDeleteAgendaMutation,
  useGetAgendaByIdQuery,
} = agendaApi;
