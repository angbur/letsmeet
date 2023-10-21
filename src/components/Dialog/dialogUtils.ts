import type { DialogType } from '@store/dialogSlice';
import AddNewTimeblock from './components/AddNewTimeblock/AddNewTimeblock';
import { ReactNode } from 'react';
import AddRole from './components/AddRole/AddRole';
import DeleteAgenda from './components/DeleteAgenda/DeleteAgenda';

type DialogTypeToComponent = {
  // eslint-disable-next-line no-unused-vars
  [key in DialogType]: ReactNode;
};

const dialogTypeToComponent: DialogTypeToComponent = {
  createTimeblock: AddNewTimeblock,
  addRole: AddRole,
  deleteAgenda: DeleteAgenda,
};

const getDialogContentComponent = (dialogType: DialogType): ReactNode => dialogTypeToComponent[dialogType];

export default getDialogContentComponent;
