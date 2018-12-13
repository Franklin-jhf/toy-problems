// Divisors of 42 are : 1, 2, 3, 6, 7, 14, 21, 42. These divisors squared are: 1, 4, 9, 36, 49, 196, 441, 1764. The sum of the squared divisors is 2500 which is 50 * 50, a square!

// Given two integers m, n (1 <= m <= n) we want to find all integers between m and n whose sum of squared divisors is itself a square. 42 is such a number.

// The result will be an array of arrays or of tuples (in C an array of Pair) or a string, each subarray having two elements, first the number whose squared divisors is a square and then the sum of the squared divisors.

// #Examples:

// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]
// The form of the examples may change according to the language, see Example Tests: for more details.

// Note

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function listSquared(m, n) {
    const checkNum = num => {
        if (num === 1) return [1, 1]

        const factors = []

        const half = num / 2
        const isEven = num % 2 === 0

        for (let i = 1; i <= half; isEven ? i++ : i += 2) {
            if (num % i === 0) {
                const otherFactor = num / i
                if (!factors.includes(i)) factors.push(i)
                if (!factors.includes(otherFactor)) factors.push(otherFactor)
            }
        }

        const squaredFactorsSum = factors.reduce((sum, x) => x ** 2 + sum, 0)

        return Number.isInteger(Math.sqrt(squaredFactorsSum))
            ? [num, squaredFactorsSum]
            : null
    }

    const squarePairs = []
    for (let j = m; j <= n; j++) {
        const checkedNum = checkNum(j)
        if (checkedNum) squarePairs.push(checkedNum)
    }

    return squarePairs
}
