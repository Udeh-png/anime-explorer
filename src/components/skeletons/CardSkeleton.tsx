export const CardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={`flex flex-col 3md:px-3.5 2md:px-2.5 px-[0.3rem] ${className}`}
    >
      <div className="relative mb-2 flex items-end justify-end bg-skeleton-bg aspect-[2/3] w-[clamp(5vw,100vw,225.6px)] max-w-full">
        <div className="relative flex justify-between w-full px-1.5 pb-1.5">
          <div className="3md:size-10 size-8 rounded-full bg-skeleton-bg" />
          <div className="flex gap-x-2.5">
            <div className="3md:size-10 size-8 rounded-full bg-skeleton-bg" />
            <div className="3md:size-10 size-8 rounded-full bg-skeleton-bg" />
          </div>
        </div>
      </div>

      <div className="space-y-5 text-sm flex-1">
        <div className="space-y-2">
          <div className="w-full h-3 bg-skeleton-bg" />
          <div className="w-[70%] h-3 bg-skeleton-bg" />
        </div>

        <div className="flex justify-between font-light">
          <div className="w-10 h-3 bg-skeleton-bg" />
          <div className="w-10 h-3 bg-skeleton-bg" />
        </div>
      </div>
    </div>
  );
};
