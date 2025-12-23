import { CardSkeleton } from "./CardSkeleton";

export const AnimeCarouselSkeleton = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div>
      <div>
        <p className="3md:text-3xl 2md:text-2xl text-xl font-bold md:mb-3 mb-1">
          {title}
        </p>
        <p className="text-white/50 font-light md:text-base text-sm">
          {subtitle}
        </p>
      </div>

      <div className="lg:pl-12 pt-3.5 lg:-mx-15 2md:-mx-10 -mx-5">
        <div className="">
          <div className="flex overflow-x-clip">
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
            <CardSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
};
