import React from 'react';

type AgendaListProps = {
  numberOfAgendas: number;
};

const AgendaList = ({ numberOfAgendas = 5 }: AgendaListProps) => <div>{numberOfAgendas}</div>;

export default AgendaList;