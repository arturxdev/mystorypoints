const dayjs = require("dayjs");
function getWeekNumber(date) {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const millisecondsPerDay = 24 * 60 * 60 * 1000;
  const diff = (date - firstDayOfYear) / millisecondsPerDay;
  return Math.ceil((diff + firstDayOfYear.getDay() + 1) / 7);
}
module.exports = {
  getMinMaxDates(tasks) {
    let minor = dayjs();
    let major = dayjs();
    for (let index = 0; index < tasks.length; index++) {
      if (!tasks[index].endDate) continue;
      const issueDate = new dayjs(tasks[index].endDate);
      if (issueDate.isBefore(minor, "week")) minor = issueDate;
      if (issueDate.isAfter(major, "week")) major = issueDate;
    }
    return { minor, major };
  },
  genCal(dateStart, dateEnd) {
    const calStart =
      dateStart.getDay() === 0
        ? dateStart
        : dateStart.setDate(dateStart.getDate() - dateStart.getDay() + 1);
    const calEnd =
      dateStart.getDay() === 6
        ? dateEnd
        : dateEnd.setDate(dateEnd.getDate() + (6 - dateEnd.getDay()));
    const weeksArray = [];

    let currentWeek = [];
    let currentDate = new Date(calStart);

    while (currentDate <= calEnd) {
      const weekDay = currentDate.getDay();

      if (weekDay === 0 && currentWeek.length > 0) {
        weeksArray.push(currentWeek);
        currentWeek = [];
      }

      currentWeek.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeksArray.push(currentWeek);
    }
    let cal = {};
    for (let index = 0; index < weeksArray.length; index++) {
      const firstDayOfWeek = weeksArray[index][0];
      const year = firstDayOfWeek.getFullYear();
      const weekNumber = getWeekNumber(firstDayOfWeek);
      const lastDayOfWeek = weeksArray[index][weeksArray[index].length - 1];
      cal[`${year}-${weekNumber}`] = {
        year,
        week: weekNumber,
        start: firstDayOfWeek.toISOString().split("T")[0],
        end: lastDayOfWeek.toISOString().split("T")[0],
        days: weeksArray[index].map((day) => day.toISOString().split("T")[0]),
        total: 0,
        issues: [],
      };
    }
    return cal;
  },
};
