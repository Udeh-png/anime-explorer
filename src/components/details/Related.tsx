import { Media } from "@/types";
import { getStatusMessage } from "@/utils/detailsPageUtils";
import { formatTitle } from "@/utils/sharedUtils";
import Image from "next/image";
import Link from "next/link";

export const Related = ({ media }: { media: Media }) => {
  const relatedMedias = media.relations.edges;

  return (
    <div className="flex flex-cpl flex-wrap gap-3">
      {relatedMedias.map(({ relationType, node }, i) => {
        const { coverImage, id, title: titleObj, status, type } = node;
        const title = titleObj.english || titleObj.romaji;
        const urlTitle = formatTitle(title);
        return (
          <Link
            href={type.toLowerCase() === "anime" ? `/${id}/${urlTitle}` : "/"}
            className={`grid grid-cols-[1fr_2fr] w-80 h-auto items-center`}
            key={i}
          >
            <div className="">
              <Image
                src={coverImage.extraLarge}
                alt={`${title} cover image`}
                width={100}
                height={150}
              ></Image>
            </div>
            <div className="ml-1">
              <div className="text-xs text-accent-two">
                {relationType.toLowerCase()}
              </div>
              <div className="text-xs">{title}</div>
              <div className="text-xs text-white/50">
                {type.charAt(0) + type.slice(1, type.length).toLowerCase()}{" "}
                {getStatusMessage(status) && (
                  <span>&middot; {`${getStatusMessage(status)}`}</span>
                )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
