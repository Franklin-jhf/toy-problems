// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// #Example: longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

function longestConsec(strarr, k) {
    if (k < 1) return ''
    let longestString = ''

    for (i = 0; i <= strarr.length - k; i++) {
        const string = strarr.slice(i, i + k).join('')
        if (string.length > longestString.length) longestString = string
    }

    return longestString
}
