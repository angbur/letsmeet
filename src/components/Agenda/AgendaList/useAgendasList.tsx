import { useGetAllAgendasQuery } from '@services/agenda/agenda';
import { Agenda } from '@store/agendaSlice';

type AgendasListProps = {
  numberOfAgendas: number;
};

const useAgendasList = ({ numberOfAgendas }: AgendasListProps) => {
  const { data, error } = useGetAllAgendasQuery();
  let agendasList: Agenda[] = [];

  if (isAgendaList(data))
    agendasList = [...data.data]
      .sort((a, b) => {
        if (a.last_updated > b.last_updated) return -1;
        if (a.last_updated < b.last_updated) return 1;
        return 0;
      })
      .slice(0, numberOfAgendas);

  return { agendasList, error };
};

export default useAgendasList;

function isAgendaList(list: { data: Agenda[] } | undefined): list is { data: Agenda[] } {
  return (list as { data: Agenda[] }) !== undefined;
}
