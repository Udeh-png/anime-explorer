import { getWeekDay } from "@/utils/schedulesPageUtils";
import { createQueryString } from "@/utils/sharedUtils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { ForwardedRef, forwardRef } from "react";

export const Day = forwardRef(
  (
    {
      date,
      isToday,
      isSelectedDate,
      ...props
    }: {
      date: Date;
      isToday: boolean;
      isSelectedDate: boolean;
    } & React.HtmlHTMLAttributes<HTMLAnchorElement>,
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const params = useSearchParams();
    const searchParams = createQueryString(
      params,
      "selectedDay",
      String(date.getTime())
    );

    return (
      <Link
        href={`schedule?${searchParams}`}
        className={`min-w-27 cursor-pointer max-h-22 h-22 rounded-lg text-center flex flex-col items-center justify-center gap-y-1 bg-card-background caret-transparent transition-colors ${
          isSelectedDate ? "bg-accent-two!" : ""
        }`}
        ref={ref}
        {...props}
      >
        <p className="text-sm font-semibold">
          {getWeekDay(date, "short")} {date.getDate()}
        </p>
        {isToday && (
          <p className="text-xs px-2.5 py-[1px] rounded-full bg-green-500 w-fit">
            Today
          </p>
        )}
      </Link>
    );
  }
);

Day.displayName = "Day";
