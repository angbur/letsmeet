import { useGetAgendaByIdQuery } from '@services/agenda/agenda';

const useEditedAgenda = (agendaId: string) => {
  const { data } = useGetAgendaByIdQuery(agendaId);
  return data;
};

export default useEditedAgenda;
