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
