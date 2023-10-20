import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const languages = ['english', 'polish', 'german'] as const;
export type Language = (typeof languages)[number];

export const detailsItems: SectionItems = {
  'general options': { active: true, valid: false },
  'agenda creator': { active: false, valid: false },
  theme: { active: false, valid: false },
};

export const accessesItems: SectionItems = {
  accesses: { active: false, valid: false },
};

const initialState: CreatedAgendaState = {
  details: detailsItems,
  accesses: accessesItems,
  language: 'english',
};

type CreateAgendaPayload = {
  section: keyof CreatedAgendaState;
  item: keyof SectionItems;
};

const createAgendaSlice = createSlice({
  name: 'createAgenda',
  initialState,
  reducers: {
    setActive: (state, { payload }: PayloadAction<CreateAgendaPayload>) => {
      const { section, item } = payload;
      resetActive(state.details);
      resetActive(state.accesses);

      state[section][item].active = true;
    },
    setValid: (state, { payload }: PayloadAction<CreateAgendaPayload>) => {
      const { section, item } = payload;
      state[section][item].valid = true;
    },
    setCurrentLanguage: (state, { payload }: PayloadAction<Language>) => {
      state.language = payload;
    },
  },
});

export const { setActive, setValid, setCurrentLanguage } = createAgendaSlice.actions;

export default createAgendaSlice.reducer;

export const selectDetails = (state: RootState) => state.createAgenda.details;
export const selectAccesses = (state: RootState) => state.createAgenda.accesses;
export const selectLanguage = (state: RootState) => state.createAgenda.language;

export type ItemProps = {
  active: boolean;
  valid: boolean;
};

export type SectionItems = Record<string, ItemProps>;

type CreatedAgendaState = {
  details: SectionItems;
  accesses: SectionItems;
  language: Language;
};

type StateItem = {
  active: boolean;
};

const resetActive = (obj: Record<string, StateItem>) => {
  Object.keys(obj).forEach((key) => {
    obj[key].active = false;
  });
};
