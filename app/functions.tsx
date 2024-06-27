
function getDayName(date: Date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
}
function getFullHoursAndMinutes(date: Date) {
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

function getMonthNumber(date: Date) {
    const month = date.getMonth().toString().padStart(2, '0');
    return month;
}

function getYearNumber(date: Date) {
    const year = date.getFullYear().toString().slice(2);
    return year;
}

function getHourAndMinutes(fullHours: string) {
    const hour = fullHours.slice(0,5);
    return hour;
}
export { getDayName, getFullHoursAndMinutes, getMonthNumber, getYearNumber, getHourAndMinutes }