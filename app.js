// Assigning Variable to Object Properties
// Provided code:
var obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
  var a = obj.numbers.a;
  var b = obj.numbers.b;

// Refactored Code:

let obj1 = {
    numbers1: {
        a1: 1,
        b1: 2
    }
};

let {a1, b1} = obj1.numbers1;

// Array Swap
// Provided Code: 
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;

// Refactored code using one-line arreay swap with destructuring
[arr[0], arr[1]] = [arr[1], arr[0]]

// raceResults()

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, ...rest})
console.log(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']))