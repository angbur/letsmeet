const addZeroToDate = (day: number): string | number => {
  return day < 10 ? `0${day}` : day;
};

export const parseDate = (date: string): string => {
  const newDate = new Date(date);
  return `${addZeroToDate(newDate.getDate())}.${newDate.getMonth() + 1}.${newDate.getFullYear()}`;
};

export const parseLastUpdatedDate = (date: string): string => {
  if(!date){
    return ''
  }
  const newDate = new Date(date);
  return `${addZeroToDate(newDate.getDate())}.${
    newDate.getMonth() + 1
  }.${newDate.getFullYear()} ${newDate.getHours()}:${newDate.getMinutes()}`;
};

export const calculateDaysLeft = (date: string): string => {
  const startDate = new Date(date);
  const diffTime = (startDate.getTime() - new Date().getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return `${Math.abs(diffDays)} day${diffDays !== 1 ? 's' : ''} ${diffDays >=0 ? 'left' : 'ago'}`;
};

export const getRole = (userId: string, owner_id: string, coowners_id: string[]): string => {
  if (userId === owner_id) return 'Owner';
  if (coowners_id.indexOf(userId) !== -1) return 'Co-org';
  return 'Viewer';
};

export const uppercaseToCapital = (text: string): string => {
  const lowercase = text.toLowerCase();
  return lowercase.charAt(0).toUpperCase() + lowercase.slice(1);
};
