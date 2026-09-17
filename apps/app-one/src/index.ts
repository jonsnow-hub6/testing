import { getGreeting } from '@org/shared-util';
import { add, multiply } from '@org/math-util';

console.log(getGreeting('App One'));
console.log(`2 + 3 = ${add(2, 3)}`);
console.log(`4 * 5 = ${multiply(4, 5)}`);
