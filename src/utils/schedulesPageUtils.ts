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

export const normalizeTime = (
  date: Date,
  {
    hrsCycle,
    hours = true,
    mins = true,
    secs = true,
  }: {
    hrsCycle: "h12" | "h24" | "h23";
    hours?: boolean;
    mins?: boolean;
    secs?: boolean;
  }
): string => {
  return date.toLocaleTimeString("en-US", {
    hour: hours ? "2-digit" : undefined,
    minute: mins ? "2-digit" : undefined,
    second: secs ? "2-digit" : undefined,
    hourCycle: hrsCycle,
  });
};
