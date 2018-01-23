// In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

// Your mission is simple: write a function that takes an integer n and returns the value of n!.

// You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! = "15511210043330985984000000" as a string.

// For more on factorials, see http://en.wikipedia.org/wiki/Factorial

function factorial(n){
  const multiply = (arr, x) => {
    let temp = arr.reverse();
    let carry = 0;
    for (let i = 0; i < temp.length; i++) {
      let j = temp[i] * x + carry;
      if (i === temp.length - 1 && j >= 10) {temp.push(0);}
      if (j >= 10) {carry = Math.floor(j / 10)}
      else { carry = 0 }
      temp[i] = j % 10;
    }
    return temp.reverse();
  }
  let sum = [1];
  for (let i = 1; i <= n; i++) {
    sum = multiply(sum, i);
  }
  
  return sum.join('');
}