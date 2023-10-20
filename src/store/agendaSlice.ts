import { createSlice } from '@reduxjs/toolkit';
import { agendaApi } from 'src/services/agenda/agenda';

const visits = ['conference', 'meeting', 'event', 'hackathon', 'workshops', 'other'] as const;

type VisitType = (typeof visits)[number];

export type Agenda = {
  id: string;
  type: VisitType;
  name: string;
  description: string;
  link: string | null;
  startDate: string;
  endDate?: string;
  owner_id: string;
  is_private: boolean;
  coowners_ids: string[];
  last_updated: string;
};

type AgendaState = {
  agendas: Agenda[];
  status: 'idle' | 'loading' | 'failed';
};

const initialState: AgendaState = {
  agendas: [],
  status: 'idle',
};

const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(agendaApi.endpoints.getAllAgendas.matchFulfilled, (state, { payload }) => {
      state.agendas = payload.data;
      state.status = 'idle';
    });
    builder.addMatcher(agendaApi.endpoints.getAllAgendas.matchPending, (state) => {
      state.status = 'loading';
    });
    builder.addMatcher(agendaApi.endpoints.getAllAgendas.matchRejected, (state) => {
      state.status = 'failed';
    });
  },
});

export default agendaSlice.reducer;
