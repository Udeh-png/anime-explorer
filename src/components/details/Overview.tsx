import { Media } from "@/types";
import { DescriptionUi } from "../shared/DescriptionUtil";

export const Overview = ({ media }: { media: Media }) => {
  const { description, genres } = media;
  return (
    <div className="">
      <p className="min-[600px]:text-2xl text-base font-semibold mb-4">
        Synopsis
      </p>

      <DescriptionUi description={description} />

      <div>
        <p className="font-semibold min-[600px]:text-lg text-sm mb-2">Genres</p>

        <div className="flex gap-2 flex-wrap">
          {genres.map((genre, i) => (
            <span
              className="px-3 bg-white/20 py-1 rounded-full min-[600px]:text-sm text-[10px]"
              key={i}
            >
              {genre}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
