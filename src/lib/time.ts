export const formatTimeRange = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${start.getDate()}/${start.getMonth()}/${start.getFullYear()} ${start.getHours()}:${start.getMinutes()} - ${end.getHours()}:${end.getMinutes()}`;
};

export const formatTimeRangeSgt = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${start.getDate()}/${start.getMonth()}/${start.getFullYear()} ${start.getHours() + 8}:${start.getMinutes()} - ${end.getHours() + 8}:${end.getMinutes()}`;
};
