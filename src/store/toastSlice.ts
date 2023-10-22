import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type ToastVariant = 'default' | 'error' | 'success';
export type ToastActionType = 'copyLink';

export type ToastContent = {
  text: string;
  variant: ToastVariant;
  action?: ToastActionType;
};

type ToastState = {
  isOpen: boolean;
  toastContent: ToastContent | undefined;
};

const initialState: ToastState = {
  isOpen: false,
  toastContent: undefined,
};

const toastSlice = createSlice({
  name: 'toast',
  initialState,
  reducers: {
    openToast: (state, action: PayloadAction<ToastContent>) => {
      state.isOpen = true;
      state.toastContent = action.payload;
    },
    closeToast: (state) => {
      state.isOpen = false;
      state.toastContent = undefined;
    },
  },
});

export const { openToast, closeToast } = toastSlice.actions;

export default toastSlice.reducer;

export const selectToastIsOpen = (state: RootState) => state.toast.isOpen;
export const selectToastContent = (state: RootState) => state.toast.toastContent;
