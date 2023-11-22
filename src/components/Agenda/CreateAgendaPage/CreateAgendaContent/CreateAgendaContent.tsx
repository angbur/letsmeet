import React, { Fragment } from 'react';
import { selectDetails, selectAccesses } from '@store/createAgendaSlice';
import { useSelector } from 'react-redux';
import AgendaCreator from '../AgendaForm/components/AgendaCreator/AgendaCreator';
import GeneralOptions from '../AgendaForm/components/GeneralOptions/GeneralOptions';
import AgendaTheme from '../AgendaForm/components/AgendaTheme/AgendaTheme';
import AgendaAccesses from '../AgendaForm/components/AgendaAccesses/AgendaAccesses';

type CreateAgendaContentProps = {
  isSaved: boolean;
};

const CreateAgendaContent = ({ isSaved }: CreateAgendaContentProps) => {
  const details = useSelector(selectDetails);
  const accesses = useSelector(selectAccesses);

  return (
    <Fragment>
      {details['general options'].active && <GeneralOptions isSaved={isSaved} />}
      {details['agenda creator'].active && <AgendaCreator isSaved={isSaved} />}
      {details.theme.active && <AgendaTheme isSaved={isSaved} />}
      {accesses.accesses.active && <AgendaAccesses isSaved={isSaved} />}
    </Fragment>
  );
};

export default CreateAgendaContent;
