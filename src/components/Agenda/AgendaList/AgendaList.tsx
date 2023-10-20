import React from 'react';

type AgendaListProps = {
  numberOfAgendas: number;
};

const AgendaList = ({ numberOfAgendas = 5 }: AgendaListProps) => <div>number: {numberOfAgendas}</div>;

export default AgendaList;
