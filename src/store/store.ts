import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import userReducer from '@store/userSlice';
import agendaReducer from '@store/agendaSlice';
import timeblockReducer from '@store/timeblockSlice';
import createAgendaReducer from '@store/createAgendaSlice';
import { userApi } from '@services/user/user';
import { agendaApi } from '@services/agenda/agenda';
import { timeblockApi } from '@services/timeblock/timeblock';

export const rootReducer = combineReducers({
  agenda: agendaReducer,
  createAgenda: createAgendaReducer,
  timeblock: timeblockReducer,
  user: userReducer,
  [userApi.reducerPath]: userApi.reducer,
  [agendaApi.reducerPath]: agendaApi.reducer,
  [timeblockApi.reducerPath]: timeblockApi.reducer,
});

export const rootMiddleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(userApi.middleware, agendaApi.middleware, timeblockApi.middleware);

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
  });

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
