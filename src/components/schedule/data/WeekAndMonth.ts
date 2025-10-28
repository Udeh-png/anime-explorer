export const monthDays: Date[] = [];

const currentDate = new Date();
const firstOfTheMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);

export function getWeekDays(date: Date) {
  const weekDays: Date[] = [];
  const firstWeekDay = new Date();
  firstWeekDay.setDate(date.getDate() - date.getDay());
  for (let i = 0; i < 7; i++) {
    const newDate = new Date();

    newDate.setDate(firstWeekDay.getDate() + i);
    weekDays.push(newDate);
  }
  return weekDays;
}

while (firstOfTheMonth.getMonth() === currentDate.getMonth()) {
  const newDate = new Date(firstOfTheMonth.toISOString());
  firstOfTheMonth.setDate(firstOfTheMonth.getDate() + 1);
  monthDays.push(newDate);
}
