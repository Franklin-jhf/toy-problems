// A palindrome is a series of characters that read the same forwards as backwards such as "hannah", "racecar" and "lol".

// For this Kata you need to write a function that takes a string of characters and returns the length, as an integer value, of longest alphanumeric palindrome that could be made by combining the characters in any order but using each character only once. The function should not be case sensitive.

// For example if passed "Hannah" it should return 6 and if passed "aabbccyYx" it should return 9 because one possible palindrome would be "abcyxycba".

function longestPalindrome(str) {
    const sanitizedString = str.toLowerCase().replace(/[^a-z0-9]/g, '')

    const hash = sanitizedString.split('').reduce((acc, val) => {
        if (acc[val]) {
            acc[val] += 1
        } else {
            acc[val] = 1
        }

        return acc
    }, {})

    return Object.values(hash).reduce((palindromeLength, val) => {
        if (val % 2 === 0) {
            palindromeLength += val
        } else {
            palindromeLength += (palindromeLength % 2 === 0) ? val : val - 1
        }

        return palindromeLength
    }, 0)
}
