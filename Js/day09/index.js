// // date in js
// const d = new Date();
// // console.log(d.toDateString());
// // console.log(d.toString());
// // console.log(d.toISOString());
// console.log(typeof d);
// console.log(d.getDay());
// //sun,mon,tue,wed,thu,fri,sat
// // 0,  1,   2,  3,  4,  5,  6
// console.log(d.getMonth());
// //jan,feb,mar,apr,may,jun,jul,aug,sep,oct,nov,dec
// // 0,  1,  2,  3,  4, 5, 6, 7, 8, 9,10,11
// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime());// milliseconds since 1 jan 1970
// const now = Date.now();
// console.log(now);// milliseconds since 1 jan 1970
// const d = new Date("2022-10-20T10:10:10"); //custom date apne app bi bna skte h
// console.log(d);
// format --
//number : 0 based index
//String : actual month or day name
// YYYY-MM-DDTHH:mm:ss -- year-month-day T hour:minute:second:millisecond
// const date = new Date(2025,9,9,12,10,10,300);
// console.log(date);
// console.log(date.toString());
//
//
// const d1=new Date();
// d1.setFullYear(2025);
// d1.setMonth(9);
// d1.setDate(9);
// console.log(d1.toString());
// 
//date calculation
// const date1=new Date();
// const date2=new Date("2025-04-21");
// console.log(date2-date1);// difference in milliseconds
//
//coundown timer for olympics 2028
const date1 = new Date();
const date2 = new Date("2028-07-14T00:00:00");
const date = date2 - date1;
const days=Math.floor(date/(1000*60*60*24));
const hour=Math.floor((date/(1000*60*60))%24);
const minutes=Math.floor((date/(1000*60))%60);
const seconds=Math.floor((date/1000)%60);
console.log(`Time left for olympics 2028: ${days} days,${hour} hours,${minutes} minutes,${seconds} seconds`);
// note : dyan dene wali baat 
// 1 second =1000 milliseconds
// 1 minute=60 seconds
// 1 hour=60 minutes
// 1 day=24 hours
// 
