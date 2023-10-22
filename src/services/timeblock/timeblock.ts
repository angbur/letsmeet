import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Timeblock } from '@store/timeblockSlice';

const baseUrl = 'https://letsmeet-35f25f0de361.herokuapp.com';

export const timeblockApi = createApi({
  reducerPath: 'timeblockApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllTimeblocks: builder.query({
      query: () => ({
        url: '/get_timeblocks',
        method: 'GET',
      }),
    }),
    getAllTimeblocksByAgendaId: builder.mutation({
      query: (agendaId: string) => ({
        url: `get_agenda_timeblocks/${agendaId}`,
        method: 'GET',
      }),
    }),
    createTimeblock: builder.mutation({
      query: (timeblock: Timeblock) => ({
        url: 'create_timeblock',
        method: 'POST',
        body: timeblock,
      }),
    }),
    updateTimeblock: builder.mutation({
      query: (timeblock: Timeblock) => ({
        url: 'update_timeblock',
        method: 'PUT',
        body: timeblock,
      }),
    }),
    deleteTimeblockById: builder.mutation({
      query: (timeblockId: string) => ({
        url: `delete_timeblock/${timeblockId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetAllTimeblocksByAgendaIdMutation,
  useCreateTimeblockMutation,
  useUpdateTimeblockMutation,
  useDeleteTimeblockByIdMutation,
  useGetAllTimeblocksQuery,
} = timeblockApi;
