import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export const dialogsTypes = ['createTimeblock', 'addRole', 'deleteAgenda'] as const;
export type DialogType = (typeof dialogsTypes)[number];

type DialogState = {
  isOpen: boolean;
  dialogType: DialogType | undefined;
};

const initialState: DialogState = {
  isOpen: false,
  dialogType: undefined,
};

const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<DialogType>) => {
      state.isOpen = true;
      state.dialogType = action.payload;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.dialogType = undefined;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;

export const selectDialogIsOpen = (state: RootState) => state.dialog.isOpen;
export const selectDialogType = (state: RootState) => state.dialog.dialogType;
