import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { User, UserRole } from 'src/store/userSlice';

const baseUrl = 'https://letsmeet-35f25f0de361.herokuapp.com';

export type LoginResponseData = {
  data: User;
};

export type RequestData = {
  email: string;
  password: string;
  role?: UserRole;
};

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl,
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', '*');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponseData, RequestData>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    createUser: builder.mutation<LoginResponseData, RequestData>({
      query: (body) => ({
        url: '/create_user',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useLoginMutation, useCreateUserMutation } = userApi;
