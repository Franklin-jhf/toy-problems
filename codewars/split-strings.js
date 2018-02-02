// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str){
  return str.split('').reduce( (arr, val, idx) => idx % 2 === 0 ? [...arr, (idx == str.length - 1) ? (val + '_') : val] : [...arr.slice(0, arr.length - 1), arr[arr.length - 1] + val], []);
}