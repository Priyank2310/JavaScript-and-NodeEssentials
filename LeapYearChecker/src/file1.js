import { isLeapYear } from './dateUtil.js';

let a = isLeapYear(2036);
console.log(`Is 2036 a leap year? ${a}`);

let b = isLeapYear(2030);
console.log(`Is 2030 a leap year? ${b}`);
