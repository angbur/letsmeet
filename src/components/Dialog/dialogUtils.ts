import type { DialogType } from '@store/dialogSlice';
import AddNewTimeblock from './components/AddNewTimeblock/AddNewTimeblock';
import { ReactNode } from 'react';
import AddRole from './components/AddRole/AddRole';

type DialogTypeToComponent = {
  // eslint-disable-next-line no-unused-vars
  [key in DialogType]: ReactNode;
};

const dialogTypeToComponent: DialogTypeToComponent = {
  createTimeblock: AddNewTimeblock,
  addRole: AddRole,
};

const getDialogContentComponent = (dialogType: DialogType): ReactNode => dialogTypeToComponent[dialogType];

export default getDialogContentComponent;
