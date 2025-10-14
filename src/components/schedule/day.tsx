import { ForwardedRef, forwardRef } from "react";

export const Day = forwardRef(
  (
    {
      weekDay,
      date,
      numberOfShows,
      isToday,
      isSelectedDate,
      ...props
    }: {
      weekDay: string;
      date: number;
      numberOfShows: number;
      isToday: boolean;
      isSelectedDate: boolean;
    } & React.HtmlHTMLAttributes<HTMLDivElement>,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    return (
      <div
        className={`min-w-27 cursor-pointer max-h-22 h-22 rounded-lg text-center flex flex-col items-center justify-center gap-y-1 bg-card-background caret-transparent transition-colors ${
          isSelectedDate ? "bg-accent-two!" : ""
        }`}
        ref={ref}
        {...props}
      >
        <p className="text-sm font-semibold">
          {weekDay} {date}
        </p>
        {isToday && (
          <p className="text-xs px-2.5 py-[1px] rounded-full bg-green-500 w-fit">
            Today
          </p>
        )}
        <p className="text-xs text-white/60">{numberOfShows} shows</p>
      </div>
    );
  }
);
