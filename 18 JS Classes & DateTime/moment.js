const date = new Date("17 oct 2023 00:52")

const currentYear = date.getFullYear()
// console.log(currentYear);
const currentMonth = date.getMonth()
// console.log(currentMonth);
// const currentDay = date.getDay()
// console.log(currentDay);
// const currentWeek = date.getDay()
// console.log(currentWeek);
// const currentHour = date.getHours()
// console.log(currentHour);
// const currentSecond = date.getSeconds()
// console.log(currentSecond);


let formattedDate = moment(date).format('MMMM Do YYYY, h:mm:ss a');
console.log(formattedDate);