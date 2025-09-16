export function getStatusMessage(mediaStatus: string): string {
  switch (mediaStatus) {
    case "CANCELLED":
      return "Cancelled";

    case "FINISHED":
      return "Finished";

    case "HIATUS":
      return "On Hiatus";

    case "NOT_YET_AIRING":
      return "Coming Soon";

    case "RELEASING":
      return "Still Airing";

    default:
      return "";
  }
}

export function getMediaCategory(format: string) {
  switch (format) {
    case "MOVIE":
      return "Movie";

    case "TV":
    case "OVA":
    case "ONA":
    case "TV_SHORT":
    case "SPECIAL":
      return "Series";

    default:
      return "Music";
  }
}
