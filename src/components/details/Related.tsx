import { Media } from "@/types";
import { getStatusMessage } from "@/utils/detailsPageUtils";
import { formatTitle } from "@/utils/sharedUtils";
import Link from "next/link";

export const Related = ({ media }: { media: Media }) => {
  const relatedMedias = media.relations.edges;

  return (
    <div className="flex flex-cpl flex-wrap gap-3 max-h-110 overflow-auto scrollable">
      {relatedMedias.map(({ relationType, node }, i) => {
        const { coverImage, id, title: titleObj, status, type } = node;
        const title = titleObj.english || titleObj.romaji;
        const urlTitle = formatTitle(title);
        return (
          <Link
            href={type.toLowerCase() === "anime" ? `/${id}/${urlTitle}` : "/"}
            className={`grid min-[600px]:grid-cols-[1fr_2fr] grid-cols-[1fr_2.4fr] w-80 h-auto items-center`}
            key={i}
          >
            <div
              className="min-[600px]:w-25 min-[600px]:h-38 w-22 h-32"
              style={{
                backgroundImage: `url(${coverImage.extraLarge})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="min-[600px]:ml-1">
              <div className="text-xs text-accent-two">
                {relationType.toLowerCase()}
              </div>
              <div className="text-xs">{title}</div>
              <div className="text-xs text-white/50">
                {type.charAt(0) + type.slice(1, type.length).toLowerCase()}
                &middot;
                {`${getStatusMessage(status)}`}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
