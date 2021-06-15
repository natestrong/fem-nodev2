import * as R from 'ramda';


const add = (a, b) => a + b;
const divide = R.curry((a, b) => a / b);

const divideByTwo = divide(R.__, 2);

debugger

console.log(R.intersection([1, 2, 3], [3, 4, 5]));

