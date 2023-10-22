const addZeroToDate = (day: number): string | number => {
  return day < 10 ? `0${day}` : day;
};

export const parseDate = (date: string): string => {
  const newDate = new Date(date);
  return `${addZeroToDate(newDate.getDate())}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
};

export const parseLastUpdatedDate = (date: string): string => {
  const newDate = new Date(date);
  return `${addZeroToDate(newDate.getDate())}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
};

export const calculateDaysLeft = (date: string): string => {
  const startDate = new Date(date);
  const diffTime = Math.abs(startDate.getTime() - new Date().getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} day${diffDays !== 1 ? 's' : ''} left`;
};

export const getRole = (userId: string, owner_id: string, coowners_id: string[]): string => {
  if (userId === owner_id) return 'Owner';
  if (coowners_id.indexOf(userId) !== -1) return 'Co-org';
  return 'Viewer';
};
