import { createSlice } from '@reduxjs/toolkit';
import { timeblockApi } from '@services/timeblock/timeblock';
import { RootState } from './store';

const blocksTypes = ['break', 'talk', 'workshop', 'presentation', 'networking', 'other'];

type BlockType = (typeof blocksTypes)[number];

export type Timeblock = {
  id: string;
  title: string;
  description: string;
  location: string;
  agenda_id: string;
  start_time: string;
  duration: number;
  type: BlockType;
  presenter_id: string;
};

type TimeblockState = {
  timeblocks: Timeblock[];
  status: 'idle' | 'loading' | 'failed';
};

const initialState: TimeblockState = {
  timeblocks: [],
  status: 'idle',
};

const timeblockSlice = createSlice({
  name: 'timeblock',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(timeblockApi.endpoints.getAllTimeblocks.matchFulfilled, (state, { payload }) => {
      state.timeblocks = payload.data;
      state.status = 'idle';
    });
    builder.addMatcher(timeblockApi.endpoints.getAllTimeblocksByAgendaId.matchFulfilled, (state, { payload }) => {
      state.timeblocks = payload.data;
      state.status = 'idle';
    });
    builder.addMatcher(timeblockApi.endpoints.getAllTimeblocksByAgendaId.matchPending, (state) => {
      state.status = 'loading';
    });
    builder.addMatcher(timeblockApi.endpoints.getAllTimeblocksByAgendaId.matchRejected, (state) => {
      state.status = 'failed';
    });
    builder.addMatcher(timeblockApi.endpoints.createTimeblock.matchFulfilled, (state, { payload }) => {
      state.timeblocks.push(payload.data);
      state.timeblocks.sort((a, b) => (a.start_time > b.start_time ? 1 : -1));
      state.status = 'idle';
    });
    builder.addMatcher(timeblockApi.endpoints.createTimeblock.matchPending, (state) => {
      state.status = 'loading';
    });
    builder.addMatcher(timeblockApi.endpoints.createTimeblock.matchRejected, (state) => {
      state.status = 'failed';
    });
    builder.addMatcher(timeblockApi.endpoints.updateTimeblock.matchFulfilled, (state, { payload }) => {
      state.timeblocks = state.timeblocks.filter((block) => block.id !== payload.data.id);
      state.timeblocks.push(payload.data);
      state.timeblocks.sort((a, b) => (a.start_time > b.start_time ? 1 : -1));
      state.status = 'idle';
    });
  },
});

export default timeblockSlice.reducer;

export const selectTimeblocks = (state: RootState) => state.timeblock.timeblocks;
