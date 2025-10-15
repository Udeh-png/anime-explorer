"use client";

import { createContext, Dispatch, SetStateAction, useState } from "react";
import { getWholeDate } from "../schedulesPageUtils";

type ScheduleContextType = {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
};

export const ScheduleContext = createContext<ScheduleContextType>({
  selectedDate: "",
  setSelectedDate: () => {},
});

export const ScheduleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedDate, setSelectedDate] = useState(getWholeDate(new Date()));
  return (
    <ScheduleContext.Provider value={{ selectedDate, setSelectedDate }}>
      {children}
    </ScheduleContext.Provider>
  );
};
