// Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

// Examples:
// 13 17 31 37 71 73 are Backwards Read Primes
// 13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

// Task
// Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

// Example
// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

// backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97]
// backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967]

function backwardsPrime(start, stop) {
    const isPrime = num => {
        if (num % 2 === 0) return false
        for (let i = 3, sqrt = Math.ceil(Math.sqrt(num)); i <= sqrt; i += 2) {
            if (num % i === 0) return false;
        }
        return true
    }

    const primes = []
    for (let i = start % 2 === 0 ? start + 1 : start; i <= stop; i += 2) {
        if (isPrime(i)) primes.push(i)
    }

    return primes.filter(n => {
        const revN = Number(n.toString().split('').reverse().join(''))
        return isPrime(revN) && n !== revN
    })
}
