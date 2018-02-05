// Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

// Examples:

// range(5) --> 1,2,3,4,5
// range(3, 7) --> 3,4,5,6,7
// range(2, 3, 15) --> 2,5,8,11,14

const range = (start, step, stop) => stop ? Array.from(new Array(Math.ceil((1+stop-start)/step)),(val,index) => index*step + start) : step ? Array.from(new Array(1+step-start),(val,index)=>index+start) : Array.from(new Array(start),(val,index)=>index+1);