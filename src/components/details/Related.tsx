import { Media } from "@/types";
import { getStatusMessage } from "@/utils/detailsPageUtils";
import { formatTitle } from "@/utils/sharedUtils";
import Link from "next/link";

export const Related = ({ media }: { media: Media }) => {
  const relatedMedias = media.relations.edges;
  const relatedAnime = relatedMedias.filter(
    (relatedMedia) => relatedMedia.node.type.toLowerCase() === "anime"
  );

  return relatedAnime.length > 0 ? (
    <div className="flex flex-cpl flex-wrap gap-3 max-h-110 overflow-auto scrollable">
      {relatedAnime.map(({ relationType, node }, i) => {
        const { coverImage, id, title: titleObj, status, type } = node;
        const title = titleObj.english || titleObj.romaji;
        const urlTitle = formatTitle(title);
        return (
          <Link
            href={`/${id}/${urlTitle}`}
            className={`min-[600px]:w-40 w-30`}
            key={i}
          >
            <div
              className="w-full min-[600px]:h-60 h-50 rounded"
              style={{
                backgroundImage: `url(${coverImage.extraLarge})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="">
              <div className="min-[600px]:text-xs text-[10px]">{title}</div>
              <div className="min-[600px]:text-xs text-[10px] text-white/50">
                <span className="text-accent-two">{relationType}</span> &middot;{" "}
                {`${getStatusMessage(status)}`}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  ) : (
    <p>No Related Anime To Show :(</p>
  );
};
