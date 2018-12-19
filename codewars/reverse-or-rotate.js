// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If a chunk represents an integer such as the sum of the cubes of its digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

// sz is <= 0 or if str is empty return ""
// sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
// Examples:
// revrot("123456987654", 6) --> "234561876549"
// revrot("123456987653", 6) --> "234561356789"
// revrot("66443875", 4) --> "44668753"
// revrot("66443875", 8) --> "64438756"
// revrot("664438769", 8) --> "67834466"
// revrot("123456779", 8) --> "23456771"
// revrot("", 8) --> ""
// revrot("123456779", 0) --> ""
// revrot("563000655734469485", 4) --> "0365065073456944"

function revrot(str, sz) {
    if (sz < 1 || str.length < sz || !str) return ''
    const chunked = str.match(new RegExp(`(.{${sz}})`, 'g'))
    const getSumOfCubes = num => num.split('').reduce((acc, n) => acc + Number(n) ** 3, 0)

    return chunked.reduce((acc, num) => {
        const nArr = num.split('')
        const s = getSumOfCubes(num) % 2 === 0
            ? nArr.reverse().join('')
            : [...nArr.slice(1), nArr.slice(0, 1)].join('')
        return acc + s
    }, '')
}
