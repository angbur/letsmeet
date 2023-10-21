import React, { Fragment } from 'react';
import { selectDetails, selectAccesses } from '@store/createAgendaSlice';
import { useSelector } from 'react-redux';
import AgendaCreator from '../AgendaForm/components/AgendaCreator/AgendaCreator';
import GeneralOptions from '../AgendaForm/components/GeneralOptions/GeneralOptions';
import AgendaTheme from '../AgendaForm/components/AgendaTheme/AgendaTheme';
import AgendaAccesses from '../AgendaForm/components/AgendaAccesses/AgendaAccesses';

const CreateAgendaContent = () => {
  const details = useSelector(selectDetails);
  const accesses = useSelector(selectAccesses);

  return (
    <Fragment>
      {details['general options'].active && <GeneralOptions />}
      {details['agenda creator'].active && <AgendaCreator />}
      {details.theme.active && <AgendaTheme />}
      {accesses.accesses.active && <AgendaAccesses />}
    </Fragment>
  );
};

export default CreateAgendaContent;
