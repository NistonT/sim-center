export const formatDateRange = (start: string, end: string): string => {
  if (!start || !end) return "Неверная дата";

  const fixIso = (s: string) => s.replace(/\.\d{6}/, ".000").replace(/Z$/, "") + "Z";

  const startDate = new Date(fixIso(start));
  const endDate = new Date(fixIso(end));

  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    return "Неверная дата";
  }

  // Обрезаем 6 цифр микросекунд до 3
  const cleanStart = start.replace(/\.(\d{3})\d{3}Z$/, ".$1Z");
  const cleanEnd = end.replace(/\.(\d{3})\d{3}Z$/, ".$1Z");

  // Если не было микросекунд — добавим .000Z
  const finalStart = cleanStart.replace(/Z$/, "") + "Z";
  const finalEnd = cleanEnd.replace(/Z$/, "") + "Z";

  // Проверка валидности
  if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    console.error("Invalid date after parsing:", { start, end, cleanStart: finalStart, cleanEnd: finalEnd });
    return "Неверная дата";
  }

  const date = startDate.toLocaleDateString("ru-RU", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const startTime = startDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    second: undefined,
  });

  const endTime = endDate.toLocaleTimeString("ru-RU", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    second: undefined,
  });

  return `${date}, ${startTime} - ${endTime}`;
};
