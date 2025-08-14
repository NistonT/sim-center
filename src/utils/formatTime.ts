export const formatDateRange = (start: string, end: string): string => {
  // Убедимся, что это строки
  if (typeof start !== "string" || typeof end !== "string") {
    console.error("start or end is not a string:", { start, end });
    return "Неверная дата";
  }

  // Обрезаем 6 цифр микросекунд до 3
  const cleanStart = start.replace(/\.(\d{3})\d{3}Z$/, ".$1Z");
  const cleanEnd = end.replace(/\.(\d{3})\d{3}Z$/, ".$1Z");

  // Если не было микросекунд — добавим .000Z
  const finalStart = cleanStart.replace(/Z$/, "") + "Z";
  const finalEnd = cleanEnd.replace(/Z$/, "") + "Z";

  const startDate = new Date(finalStart);
  const endDate = new Date(finalEnd);

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
