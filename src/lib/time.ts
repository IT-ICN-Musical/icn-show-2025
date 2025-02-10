export const formatTimeRange = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${start.getDate()}/${start.getMonth() + 1}/${start.getFullYear()} ${start.getHours().toString().padStart(2, "0")}:${start.getMinutes().toString().padStart(2, "0")} - ${end.getHours().toString().padStart(2, "0")}:${end.getMinutes().toString().padStart(2, "0")}`;
};

export const formatTimeRangeSgt = (startTime: Date, endTime: Date) => {
  const start = new Date(startTime);
  const end = new Date(endTime);

  return `${startTime.toLocaleString("en-SG", {
    timeZone: "Asia/Singapore",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })} - ${endTime.toLocaleString("en-SG", {
    timeZone: "Asia/Singapore",
    hour: "2-digit",
    minute: "2-digit",
  })}`;
};
