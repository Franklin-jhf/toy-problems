// Define a function isPrime/is_prime() that takes one integer argument and returns true/True or false/False depending on if the integer is a prime.

// Per Wikipedia, a prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Example
// isPrime(5)
// => true
// Assumptions
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well (or 0).

function isPrime(num) {
  return num >= 2 ? Array.from(new Array(Math.floor(Math.sqrt(num) / 2)),(val,index)=>3 + index*2).every( (x) => num % x !== 0) && (num % 2 !== 0 || num === 2) : false;
}