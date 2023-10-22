import { createSlice } from '@reduxjs/toolkit';
import { userApi } from 'src/services/user/user';

export type UserRole = 'admin' | 'user';

export type User = {
  loggedIn: boolean;
  role: UserRole | undefined;
  error: string | undefined;
  id: string | undefined;
  email: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
};

const initialState: User = {
  loggedIn: false,
  role: 'user',
  error: undefined,
  id: undefined,
  email: undefined,
  firstName: undefined,
  lastName: undefined,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      state.loggedIn = false;
      state.role = 'user';
      state.error = undefined;
      state.id = undefined;
      state.email = undefined;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(userApi.endpoints.login.matchFulfilled, (state, { payload }) => {
      state.loggedIn = true;
      state.role = payload.data.role;
      state.error = undefined;
      state.id = payload.data.id;
      state.email = payload.data.email;
      state.firstName = payload.data.firstName;
      state.lastName = payload.data.lastName;
    });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
