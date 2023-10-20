import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User } from 'src/store/userSlice';

export type LoginResponseData = {
  data: User;
};

export type RequestData = {
  email: string;
  password: string;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.npoint.io/b174c60429102a813523',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseData, RequestData>({
      query: (credentials) => ({
        url: 'login',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useLoginMutation } = userApi;
