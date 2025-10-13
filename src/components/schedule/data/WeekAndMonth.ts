export const weekDays: Date[] = [];
export const monthDays: Date[] = [];

const currentDate = new Date();
const firstWeekDay = new Date();
const firstOfTheMonth = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  1
);

firstWeekDay.setDate(new Date().getDate() - new Date().getDay());
for (let i = 0; i < 7; i++) {
  const newDate = new Date();

  newDate.setDate(firstWeekDay.getDate() + i);
  weekDays.push(newDate);
}

while (firstOfTheMonth.getMonth() === currentDate.getMonth()) {
  const newDate = new Date(firstOfTheMonth.toISOString());
  firstOfTheMonth.setDate(firstOfTheMonth.getDate() + 1);
  monthDays.push(newDate);
}
