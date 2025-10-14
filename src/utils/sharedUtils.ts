export function formatTitle(title: string) {
  return title
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export function timeConverter(
  time: number,
  operation:
    | "secsToMillis"
    | "millisToSecs"
    | "hoursToMillis"
    | "hoursToSeconds"
): number {
  switch (operation) {
    case "secsToMillis":
      return time * 1000;
    case "millisToSecs":
      return time / 1000;
    case "hoursToMillis":
      return time * 60 * 60 * 1000;
    default:
      return NaN;
  }
}
