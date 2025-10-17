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
  timeInMillis: number,
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
  return new Date(timeInMillis).toLocaleTimeString("en-US", {
    hour: hours ? "2-digit" : undefined,
    minute: mins ? "2-digit" : undefined,
    second: secs ? "2-digit" : undefined,
    hourCycle: hrsCycle,
  });
};

export function formatDuration(ms: number) {
  const weeks = Math.floor(ms / 604800000);
  ms %= 604800000;

  const days = Math.floor(ms / 86400000);
  ms %= 86400000;

  const hours = Math.round(ms / 3600000);
  ms %= 3600000;

  const minutes = Math.round(ms / 60000);

  const parts = [];

  if (weeks > 0) {
    parts.push(`${weeks}week${weeks !== 1 ? "s" : ""}`);
  }

  if (days > 0 || weeks > 0) {
    parts.push(`${days}day${days !== 1 ? "s" : ""}`);
  }

  if (hours > 0 || days > 0 || weeks > 0) {
    parts.push(`${hours}h`);
  }

  parts.push(`${minutes}m`);

  return parts.join(" ");
}
