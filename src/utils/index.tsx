export const parseDate = (date: string): string => {
  const splitDate = date.split(' ')[0];
  return splitDate.split('-').reverse().join('.');
};

export const parseLastUpdatedDate = (date: string): string => {
  const splitDates = date.split(' ');
  const reversedDate = splitDates[0].split('-').reverse().join('.');
  return `${reversedDate} ${splitDates[1]}`;
};

export const calculateDaysLeft = (date: string): string => {
  const startDate = new Date(date.split(' ')[0]);
  const diffTime = Math.abs(startDate.getTime() - new Date().getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${diffDays} day${diffDays !== 1 ? 's' : ''} left`;
};

export const getRole = (userId: string, owner_id: string, coowners_id: string[]): string => {
  if (userId === owner_id) return 'Owner';
  if (coowners_id.indexOf(userId) !== -1) return 'Co-org';
  return 'Viewer';
};
