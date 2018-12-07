// Task
// Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

// Example
// For n = 152, the output should be 52;

// For n = 1001, the output should be 101.

// Input/Output
// [input] integer n

// Constraints: 10 ≤ n ≤ 1000000.

// [output] an integer

function deleteDigit(n) {
    const nStr = n.toString()
    const nums = nStr.split('').map((_, i) => nStr.slice(0, i) + nStr.slice(i + 1))

    return Math.max(...nums)
}
