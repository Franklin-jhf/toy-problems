// Write a function called LCS that accepts two sequences and returns the longest subsequence common to the passed in sequences.

// Subsequence
// A subsequence is different from a substring. The terms of a subsequence need not be consecutive terms of the original sequence.

// Example subsequence
// Subsequences of "abc" = "a", "b", "c", "ab", "ac", "bc" and "abc".

// LCS examples
// LCS( "abcdef" , "abc" ) => returns "abc"
// LCS( "abcdef" , "acf" ) => returns "acf"
// LCS( "132535365" , "123456789" ) => returns "12356"
// Notes
// Both arguments will be strings
// Return value must be a string
// Return an empty string if there exists no common subsequence
// Both arguments will have one or more characters (in JavaScript)
// All tests will only have a single longest common subsequence. Don't worry about cases such as LCS( "1234", "3412" ), which would have two possible longest common subsequences: "12" and "34".
// Note that the Haskell variant will use randomized testing, but any longest common subsequence will be valid.

// Note that the OCaml variant is using generic lists instead of strings, and will also have randomized tests (any longest common subsequence will be valid).

// Tips
// Wikipedia has an explanation of the two properties that can be used to solve the problem:

// First property
// Second property

function LCS(x, y) {
	let strX = x.split('');
	let strY = y.split('');
  
	let resX = [];
	let resY = [];
  
	let i = strY.length - 1;
	while (strX.length > 0 && i > 0) {
    	while (!strX.includes(strY[i])) {i--;}
    	let temp = strX.pop();
    	if (temp === strY[i]) {resX.unshift(temp); i--;}
	}
  
	strX = x.split('');
	strY = y.split('');

	i = strX.length - 1;
	while (strY.length > 0 && i > 0) {
		while (!strY.includes(strX[i])) { i-- }
		let temp = strY.pop();
		if (temp === strX[i]) {resY.unshift(temp); i--;}
	}
  
	if (x[0] === y[0] && resX[0] != x[0]) {resX.unshift(x[0]);}
	if (x[0] === y[0] && resY[0] != y[0]) {resY.unshift(y[0]);}

	return resX.length === 0 && resY.length === ? ''
		: resX.length > resY.length ? resX.join('')
		: resY.join('');
}