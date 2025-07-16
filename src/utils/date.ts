export const getWeekDays = (startDate: Date) => {
  const days = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    days.push(date);
  }
  return days;
};

export const formatDate = (date: Date) => date.toISOString().split('T')[0]; // YYYY-MM-DD
export const formatDisplayDate = (date: Date) => date.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
export const formatDayOfWeek = (date: Date) => date.toLocaleDateString('es-ES', { weekday: 'long' });