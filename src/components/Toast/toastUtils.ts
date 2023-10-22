import { ToastActionType } from '@store/toastSlice';
import { ReactNode } from 'react';
import CopyLinkAction from './components/CopyLinkAction/CopyLinkAction';

type ToastAction = {
  // eslint-disable-next-line no-unused-vars
  [key in ToastActionType]: ReactNode;
};

const toastActionToComponent: ToastAction = {
  copyLink: CopyLinkAction,
};

const getToastActionComponent = (actionType: ToastActionType): ReactNode => toastActionToComponent[actionType];

export default getToastActionComponent;
