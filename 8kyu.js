// Do problems here

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function evenOrOdd(number) {
    if (number % 2 == 0 ){
      return "Even";
    }else{
      return "Odd";
    }
  }

//   Better answer 

function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
  }


//   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

  function sum (numbers) {
  "use strict";
  if(!numbers.length){
      return 0
  }else{
    let sum = 0;
     for(let number of numbers){
      sum += number 
     } 
    return sum
  }
};

// Best Answer

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

// // Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
  if (n >= 10){
    return 'Great, now move on to tricks';
  }else{
    return'Keep at it until you get it';
  }
}

// Best Answer

function hoopCount (n) {
  return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
}
