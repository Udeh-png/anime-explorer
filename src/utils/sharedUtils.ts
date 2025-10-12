export function formatTitle(title: string) {
  return title
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-")
    .trim();
}

export function timeConverter(
  seconds: number,
  operation: "toMillis" | "toSecs"
): number {
  switch (operation) {
    case "toMillis":
      return seconds * 1000;
    case "toSecs":
      return seconds / 1000;
    default:
      return NaN;
  }
}
