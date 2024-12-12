export const formatTimeRange = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()} ${start.getHours().toString().padStart(2, "0")}:${start.getMinutes().toString().padStart(2, "0")} - ${end.getHours().toString().padStart(2, "0")}:${end.getMinutes().toString().padStart(2, "0")}`;
};
