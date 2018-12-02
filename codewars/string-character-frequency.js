// In this Kata, we are going to determine if the count of each of the characters in a string can be equal if we remove a single character from that string.

// For example:

// solve('abba') = false -- if we remove any character, the count of each character will not be equal.
// solve('abbba') = true -- if we remove one b, the count of each character becomes 2.
// solve('aaaa') = true -- if we remove one character, the remaining characters have same count.
// solve('wwwf') = true -- if we remove f, the remaining letters have same count.
// More examples in the test cases.

// Good luck!

function solve(s){
    const checkUniformity = arr => {
        arr = arr.filter(n => n)
        if (arr.length < 2) return true
        arr.sort()
        return arr[0] === arr[1] && arr[0] === arr[arr.length - 1]
    }

    const charCounts = Object.values(s.split('').reduce((acc, l) => {
        if (acc[l]) {
            acc[l]++
        } else {
            acc[l] = 1
        }
        return acc
    }, {}))


    return charCounts.some((c, i, arr) => checkUniformity([...arr.slice(0, i), c - 1, ...arr.slice(i + 1)]))
}
