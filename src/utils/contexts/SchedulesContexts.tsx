"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { getWholeDate } from "../schedulesPageUtils";

type ScheduleContextType = {
  view: "week" | "day";
  setView: Dispatch<SetStateAction<"week" | "day">>;
  selectedDay: string;
  setSelectedDay: Dispatch<SetStateAction<string>>;
};

export const ScheduleContext = createContext<ScheduleContextType>({
  view: "week",
  setView: () => {},
  selectedDay: "",
  setSelectedDay: () => {},
});

export const ScheduleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [view, setView] = useState<"week" | "day">("week");
  const [selectedDay, setSelectedDay] = useState(getWholeDate(new Date()));
  return (
    <ScheduleContext.Provider
      value={{ view, setView, selectedDay, setSelectedDay }}
    >
      {children}
    </ScheduleContext.Provider>
  );
};
