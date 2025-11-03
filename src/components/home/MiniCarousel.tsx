import Link from "next/link";
import { Card } from "../shared/Card";
import { PageObject } from "@/types";

export const MiniCarousel = ({
  pageObj,
  title,
  viewMoreLink,
}: {
  pageObj: PageObject;
  title: string;
  viewMoreLink: string;
}) => {
  return (
    <div className="">
      <div className="flex justify-between items-center min-[1090px]:mb-2 mb-1 px-10">
        <p className="min-[1090px]:text-2xl text-xl font-semibold">{title}</p>
        <Link href={viewMoreLink} className="flex items-center">
          <span className="text-xs min-[1090px]:text-sm text-white/70">
            View All
          </span>
        </Link>
      </div>

      <div className="flex min-[1090px]:gap-x-4 gap-x-2 overflow-auto scrollable">
        <div className="ml-6"></div>
        {pageObj.media.map((media, i) => (
          <Card media={media} key={i} />
        ))}
      </div>
    </div>
  );
};
