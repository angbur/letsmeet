import React from 'react';
import useAgendasList from './useAgendasList';
import { Agenda } from '@store/agendaSlice';

type AgendaListProps = {
  numberOfAgendas: number;
};

const AgendaList = ({ numberOfAgendas = 5 }: AgendaListProps) => {
  const { agendasList } = useAgendasList({ numberOfAgendas });

  return (
    <div className="AgendaList">
      {agendasList.map((agenda: Agenda) => (
        <div key={agenda.id} className="AgendaList__item">
          <div className="AgendaList__item__title">{agenda.name}</div>
          <div className="AgendaList__item__description">{agenda.description}</div>
        </div>
      ))}
    </div>
  );
};

export default AgendaList;
