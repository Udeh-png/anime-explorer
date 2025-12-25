import { ImSpinner9 } from "react-icons/im";

export default function Loading() {
  return (
    <div className="absolute inset-0 mt-14 overflow-clip">
      <ImSpinner9 className="absolute top-1/2 left-1/2 -translate-1/2 text-5xl animate-spin text-accent-one" />
      <div className="h-full lg:px-15 lg:pt-17 3md:px-10 3md:pt-30 px-5 space-y-20">
        {/* Hero */}
        <div className="3md:gap-y-13 gap-y-5 flex flex-col 3md:items-stretch 3md:justify-start items-center justify-end">
          {/* Hero: Title, Genre, Description */}
          <div className="gap-y-5 w-full flex flex-col 3md:items-start items-center 3md:justify-start justify-end 3md:aspect-auto aspect-[3/4]">
            <div className="bg-skeleton-bg 3md:w-100 w-full 2md:h-18 h-12" />
            <div className="bg-skeleton-bg 3md:w-50 w-[60%] h-2.5" />
            <div className="space-y-2.5 3md:block hidden">
              <div className="bg-skeleton-bg w-90 h-2.5" />
              <div className="bg-skeleton-bg w-90 h-2.5" />
              <div className="bg-skeleton-bg w-90 h-2.5" />
              <div className="bg-skeleton-bg w-90 h-2.5" />
            </div>
          </div>

          {/* Hero: CTAs */}
          <div className="flex gap-x-3">
            <div className="bg-skeleton-bg w-60 h-11 rounded" />
            <div className="bg-skeleton-bg size-11 rounded" />
            <div className="bg-skeleton-bg size-11 rounded" />
          </div>

          {/* Hero: Pagination Buttons */}
          <div className="flex gap-x-3">
            <div className="w-12 h-2 bg-skeleton-bg rounded-full" />
            <div className="w-6 h-2 bg-skeleton-bg rounded-full" />
            <div className="w-6 h-2 bg-skeleton-bg rounded-full" />
          </div>
        </div>

        {/* Anime Carousel */}
        <div className="">
          {/* Anime Carousel: Heading, Subheading */}
          <div className="space-y-3">
            <div className="w-90 h-8.5 bg-skeleton-bg" />
            <div className="w-45 h-4.5 bg-skeleton-bg" />
          </div>

          {/* Anime Carousel: Card Carousel */}
          <div className="flex gap-x-7 mt-5">
            <div className="bg-skeleton-bg min-w-57 h-100" />
            <div className="bg-skeleton-bg min-w-57 h-100" />
            <div className="bg-skeleton-bg min-w-57 h-100" />
            <div className="bg-skeleton-bg min-w-57 h-100" />
            <div className="bg-skeleton-bg min-w-57 h-100" />
            <div className="bg-skeleton-bg min-w-57 h-100" />
          </div>
        </div>
      </div>
    </div>
  );
}
