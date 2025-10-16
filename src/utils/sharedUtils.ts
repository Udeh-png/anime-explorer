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

export function getOrdinal(num: number) {
  const isl = new Intl.PluralRules("en-US", { type: "ordinal" });
  const suffixes: Record<string, string> = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  return num + suffixes[isl.select(num)];
}

export function createQueryString(
  searchParams: URLSearchParams,
  name: string,
  value: string
) {
  const params = new URLSearchParams(searchParams.toString());
  params.set(name, value);
  return params.toString();
}
