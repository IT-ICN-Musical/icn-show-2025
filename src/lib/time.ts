export const formatTimeRange = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${start.getDate()}/${start.getMonth()}/${start.getFullYear()} ${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`;
};
