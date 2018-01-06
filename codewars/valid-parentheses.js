// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true
// Constraints
// 0 <= input.length <= 100

// You may assume that the input string will only contain opening and closing parenthesis and will not be an empty string.

function validParentheses(parens){
  const stack = [];
  
  let result = true;
  parens.split('').forEach( x => {
    if (x === ')' && stack.length === 0) return result = false;
    if (x === '(') return stack.unshift(x);
    if (x = ')' && stack[0] === '(') return stack.shift();
  })
  
  return stack.length > 0 ? false : result;
}