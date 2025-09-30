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
    <div className="grid min-[600px]:grid-cols-3 grid-cols-2 gap-3 max-h-110 overflow-auto scrollable pr-2">
      {relatedAnime.map(({ relationType, node }, i) => {
        const { coverImage, id, title: titleObj, status, type } = node;
        const title = titleObj.english || titleObj.romaji;
        const urlTitle = formatTitle(title);
        return (
          <Link href={`/${id}/${urlTitle}`} className={`text-xs`} key={i}>
            <div
              className="min-[600px]:h-50 h-50 rounded-lg mb-2 min-[600px]:max-w-67 w-full"
              style={{
                backgroundImage: `url(${coverImage.extraLarge})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <p className="font-semibold">{title}</p>
            <p className="text-white/50">
              <span className="text-accent-two">{relationType}</span> &middot;{" "}
              <span>{status}</span>
            </p>
          </Link>
        );
      })}
    </div>
  ) : (
    <p>No Related Anime To Show :(</p>
  );
};
