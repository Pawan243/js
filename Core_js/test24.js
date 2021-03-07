console.log('welcome to test24 in js learning series')

let today = new Date()
// console.log(typeof today)
let otherDate = new Date("8-4-2020 04:03:02");
otherDate = new Date('June 14 2014');
otherDate = new Date('2/12/1996');

let a;

a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
a = otherDate.getMonth();
console.log(a)
otherDate.setDate(23);
otherDate.setMonth(0)
otherDate.setFullYear(2000);
otherDate.setMinutes(3)
otherDate.setHours(2);
otherDate.setSeconds(3);
console.log(otherDate)
console.log(a)