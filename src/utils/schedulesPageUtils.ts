const dateOption: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
};

export const getWholeDate = (day: Date): string => {
  return day.toLocaleDateString("en-US", dateOption);
};

export const getWeekDay = (
  day: Date,
  format: "short" | "long" | "narrow"
): string => {
  return day.toLocaleDateString("en-US", {
    weekday: format,
  });
};

export const getMonth = (
  day: Date,
  format: "2-digit" | "short" | "long" | "numeric"
): string => {
  return day.toLocaleDateString("en-US", {
    month: format,
  });
};
