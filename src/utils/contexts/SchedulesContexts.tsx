"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { getWholeDate } from "../schedulesPageUtils";

type ScheduleContextType = {
  view: "week" | "day";
  setView: Dispatch<SetStateAction<"week" | "day">>;
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

export const ScheduleContext = createContext<ScheduleContextType>({
  view: "week",
  setView: () => {},
  selectedDate: "",
  setSelectedDate: () => {},
});

export const ScheduleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [view, setView] = useState<"week" | "day">("week");
  const [selectedDate, setSelectedDate] = useState(getWholeDate(new Date()));
  return (
    <ScheduleContext.Provider
      value={{ view, setView, selectedDate, setSelectedDate }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
