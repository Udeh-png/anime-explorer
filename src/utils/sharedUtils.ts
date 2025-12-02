import { streamingPlatforms } from "@/data";

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

export function getCurrentSeason() {
  const currentMonth = new Date().toLocaleDateString("en-US", {
    month: "long",
  });

  switch (currentMonth.toLowerCase()) {
    case "december":
      return "WINTER";
    case "january":
      return "WINTER";
    case "february":
      return "WINTER";
    case "march":
      return "WINTER";
    case "april":
      return "SPRING";
    case "may":
      return "SPRING";
    case "june":
      return "SPRING";
    case "july":
      return "SUMMER";
    case "august":
      return "SUMMER";
    case "september":
      return "SUMMER";
    case "october":
      return "FALL";
    case "november":
      return "FALL";

    default:
      return "";
  }
}

export function getStarCount(
  score: number,
  totalStars: number
): {
  scoreInRange: number;
  fullStars: number;
  hasHalfStars: boolean;
  emptyStars: number;
} {
  const scoreInRange = Number(((score * totalStars) / 100).toFixed(1));
  const fullStars = Math.floor(scoreInRange);
  const hasHalfStars = scoreInRange % 1 !== 0;
  const emptyStars = totalStars - (fullStars + (hasHalfStars ? 1 : 0));

  return {
    scoreInRange,
    fullStars,
    hasHalfStars,
    emptyStars,
  };
}

export const getStreamingLink = (externalLinks: { url: string }[]) => {
  for (const platform of streamingPlatforms) {
    const match = externalLinks.find((link) => link.url.includes(platform));
    if (match) {
      return match.url;
    }
  }
};
