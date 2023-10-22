import { createSlice } from '@reduxjs/toolkit';
import { agendaApi } from 'src/services/agenda/agenda';
import { RootState } from './store';

export const visits = ['CONFERENCE', 'MEETING', 'EVENT', 'HACKATHON', 'WORKSHOP', 'OTHER'] as const;

type VisitType = (typeof visits)[number];

type AgendaStatus = 'DRAFT' | 'PUBLISHED';

export type Agenda = {
  id?: string;
  type: VisitType;
  name: string;
  description: string;
  link: string | null;
  start_date: string;
  end_date?: string;
  owner_id: string;
  is_private: boolean;
  coowners_ids: string[];
  last_updated: string;
  status: AgendaStatus;
};

const defaultAgenda: Agenda = {
  type: 'CONFERENCE',
  name: '',
  description: '',
  link: 'htttp://example.link.543965743678345.com',
  start_date: '',
  owner_id: '',
  is_private: false,
  coowners_ids: [],
  last_updated: '',
  status: 'DRAFT',
};

type AgendaState = {
  agendas: Agenda[];
  editedAgenda?: Agenda;
  status: 'idle' | 'loading' | 'failed';
};

const initialState: AgendaState = {
  agendas: [],
  editedAgenda: defaultAgenda,
  status: 'idle',
};

const agendaSlice = createSlice({
  name: 'agenda',
  initialState,
  reducers: {
    updateNewAgenda: (state, action) => {
      state.editedAgenda = { ...state.editedAgenda, ...action.payload };
    },
  },
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
    builder.addMatcher(agendaApi.endpoints.createAgenda.matchFulfilled, (state, { payload }) => {
      state.agendas.push(payload.data);
      state.status = 'idle';
    });
  },
});

export default agendaSlice.reducer;

export const { updateNewAgenda } = agendaSlice.actions;

export const selectEditedAgenda = (state: RootState) => state.agenda.editedAgenda;
