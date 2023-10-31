// // Do problems here

// // Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if (number % 2 == 0 ){
//       return "Even";
//     }else{
//       return "Odd";
//     }
//   }

// //   Better answer 

// function even_or_odd(number) {
//     return number % 2 ? "Odd" : "Even"
//   }


// //   Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

// // Examples
// // Input: [1, 5.2, 4, 0, -1]
// // Output: 9.2

// // Input: []
// // Output: 0

// // Input: [-2.398]
// // Output: -2.398

// // Assumptions
// // You can assume that you are only given numbers.
// // You cannot assume the size of the array.
// // You can assume that you do get an array and if the array is empty, return 0.

//   function sum (numbers) {
//   "use strict";
//   if(!numbers.length){
//       return 0
//   }else{
//     let sum = 0;
//      for(let number of numbers){
//       sum += number 
//      } 
//     return sum
//   }
// };

// // Best Answer

// function sum(numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// // // Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// // Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// // If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// // If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// function hoopCount (n) {
//   if (n >= 10){
//     return 'Great, now move on to tricks';
//   }else{
//     return'Keep at it until you get it';
//   }
// }

// // Best Answer

// function hoopCount (n) {
//   return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
// }

// // You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// // Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// // Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   let wow = distanceToPump/fuelLeft;
//   if( wow <= mpg){
//     return true;
//   }else{
//     return false;
//   }
// };

// // Best Answer

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//   return distanceToPump/mpg <= fuelLeft
// };

// // The Story:
// // Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.

// // Task Overview:
// // You have to write a function that accepts three parameters:

// // cap is the amount of people the bus can hold excluding the driver.
// // on is the number of people on the bus excluding the driver.
// // wait is the number of people waiting to get on to the bus excluding the driver.
// // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

// function enough(cap, on, wait) {
//   // your code here
//   let seatsLeft = cap - on;
//   console.log(seatsLeft);
//   let cantBoard = wait - seatsLeft;
//     console.log(cantBoard);
//   if(seatsLeft >= wait){
//     return 0;
//   }else {
//     return cantBoard;
//   }
// }

// // Best Answer

// function enough(cap, on, wait) {
//   return Math.max(wait + on - cap, 0);
// }

// // // Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// // Use conditionals to return the proper message:

// // case	return
// // name equals owner	'Hello boss'
// // otherwise	'Hello guest'

// function greet (name, owner) {
//   // Add code here
//   if(name === owner){
//     return 'Hello boss';
//   }else{
//     return 'Hello guest';
//   }
// }

// // Best Answer

// function greet (name, owner) {
//   return name === owner ? 'Hello boss' : 	'Hello guest';
// }

// // // Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// // When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// // Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// // S is misinterpreted as 5
// // O is misinterpreted as 0
// // I is misinterpreted as 1
// // The test cases contain numbers only by mistake

// function correct(string)
// {
//   let newString;
//     newString = string.replace(/5/g, 'S');
//     newString = newString.replace(/0/g, 'O');
//     newString = newString.replace(/1/g, 'I');
//     return newString;
// }

// // Best Answer

// correct = s => s.replace(/0/g,'O').replace(/1/g,'I').replace(/5/g,'S')

// // Complete the square sum function so that it squares each number passed into it and then sums the results together.

// // For example, for [1, 2, 2] it should return 9 because 1 ^ 2 + 2 ^ 2 + 2 ^  2 = 9.

// function squareSum(numbers){
//   let total = 0;
// for(let num of numbers){
//  let sum = num ** 2
//    console.log (sum);
//   total += sum;
//     console.log(total);
//   }
//   return total;
// }

// // Best Answer

// function squareSum(numbers){
//   return numbers.reduce(function(sum, n){
//     return (n*n) + sum;
//   }, 0)
// }

// // We need a function that can transform a number (integer) into a string.

// // What ways of achieving this do you know?

// // Examples (input --> output):

// // 123  --> "123"
// // 999  --> "999"
// // -100 --> "-100"

// function numberToString(num) {
//   return num.toString();
// }

// // Write a function which converts the input string to uppercase.

// function makeUpperCase(str) {
//   return str.toUpperCase();
// }

// // Best Answer 

// const makeUpperCase = str => str.toUpperCase();


// // Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// // Return your answer as a number.

// function sumMix(x){
//   let sum = 0;
//   for (let i of x){
//       sum += Number(i);
//   }
//    return sum;
// }

// // Best Answer 

// function sumMix(x){
//   return x.map(a => +a).reduce((a, b) => a + b);
// }


// // Complete the solution so that it reverses the string passed into it.

// // 'world'  =>  'dlrow'
// // 'word'   =>  'drow'

// function solution(str){
//   return str.split('').reverse().join('');
// }

// // Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

// function boolToWord( bool ){
//   //...
//   if(bool === true){
//     return "Yes";
//   }else{
//     return "No";
//   }
// }

// // Best Answer

// function boolToWord( bool ){
//   return bool ? 'Yes':'No';
// }

// // Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// // For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// // [10, 343445353, 3453445, 3453545353453] should return 3453455.

// function sumTwoSmallestNumbers(numbers) {  
//   numbers.sort((a, b) => a - b);
//  let sum = numbers[0]+numbers[1];
//  return sum;
//  }

// //  Best Answer

// function sumTwoSmallestNumbers(numbers){  
//   numbers = numbers.sort(function(a, b){return a - b; });
//   return numbers[0] + numbers[1];
// };

// // Given an array of integers, return a new array with each value doubled.

// // For example:

// // [1, 2, 3] --> [2, 4, 6]

// function maps(x){
//   return x.map( num => num * 2);
//   }

// // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// // Example
// // ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

// function smash (words) {
//   let newSentence = words.join(" ");
//    return newSentence; 
// };

// // Best Answer 

// smash = function (words) {
//   return words.join(" ");
// };

// // Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// // For example,

// // [true,  true,  true,  false,
// //   true,  true,  true,  true ,
// //   true,  false, true,  false,
// //   true,  false, false, true ,
// //   true,  true,  true,  true ,
// //   false, false, true,  true]

// //   The correct answer would be 17.

// // Hint: Don't forget to check for bad values like null/undefined

// function countSheeps(sheep) {
//   let counter = 0;
//   for (let shee of sheep) {
//     if (shee === true) {
//       counter += 1; // Increment the counter by 1 for each true value
//     }
//   }
//   return counter;
// }

// // Best Answer 

// function countSheeps(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }


// // Nathan loves cycling.

// // Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// // You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// // For example:

// // time = 3 ----> litres = 1

// // time = 6.7---> litres = 3

// // time = 11.8--> litres = 5

// function litres(time) {
//   let water = time * 0.5
//   return Math.floor(water);
// }

// // Best Answer

// function litres(time) {
//   return Math.floor(time * 0.5);
// }


// // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// function simpleMultiplication(number) {
//   // your code........
// if(number % 2 === 0){
//   return number * 8;
// }else{
//   return number * 9
// }
// }

// // Best Answer 

// function simpleMultiplication(n) {
//   return n * (n % 2 ? 9 : 8);
// }

// // You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// // Write a program that returns the girl's age (0-9) as an integer.

// // Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

// function getAge(inputString){
//   let s = inputString.split('');
//   return Number(s[0]);
// }

// // Best Answer

// function getAge(inputString){
//   return parseInt(inputString);
// }

// // Messi goals function
// // Messi is a soccer player with goals in three leagues:

// // LaLiga
// // Copa del Rey
// // Champions
// // Complete the function to return his total number of goals in all three leagues.

// // Note: the input will always be valid.

// // For example:

// // 5, 10, 2  -->  17

// function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
//   return laLigaGoals + copaDelReyGoals +championsLeagueGoals;
// }

// // Write a function which calculates the average of the numbers in a given list.

// // Note: Empty arrays should return 0.

// function findAverage(arrays) {
//   let counter = 0;
//   for (let array of arrays){
//     counter += array;
//   }
//   let length = arrays.length;
//   if(arrays.length === 0){
//     return 0;
//   }else{
//   return counter/length;
//   }
// }

// // Best Answer

// var find_average = (array) => {  
//   return array.length === 0 ? 0 : array.reduce((acc, ind)=> acc + ind, 0)/array.length
// }

// // // When provided with a number between 0-9, return it in words.

// // Input :: 1

// // Output :: "One".

// // If your language supports it, try using a switch statement.

// function switchItUp(number){
//   //Write your own Code!
//         switch (number) {
//           case 0:
//               return "Zero";
//           case 1:
//               return "One";
//           case 2:
//               return "Two";
//           case 3:
//               return "Three";
//           case 4:
//               return "Four";
//           case 5:
//               return "Five";
//           case 6:
//               return "Six";
//           case 7:
//               return "Seven";
//           case 8:
//               return "Eight";
//           case 9:
//               return "Nine";
//           default:
//               return "Invalid input";
//       }
//   }

// // Best Answer

// switchItUp=n=>["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][n]


// // Given an array of integers your solution should find the smallest integer.

// // For example:

// // Given [34, 15, 88, 2] your solution will return 2
// // Given [34, -345, -1, 100] your solution will return -345
// // You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let lowest = args[0];
//     for (let arg of args){
//         if(lowest > arg){
//           lowest = arg;
//         }
//     }
//     return lowest;
//   }
// }

// // Best Answer 
// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }


// Make a simple function called greet that returns the most-famous "hello world!".

// Style Points
// Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? 
// What is a "hello world" solution you would want to show your friends?

function greet (){
  return "hello world!";
}

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

function updateLight(current) {
  
  if(current === "green"){
    return "yellow";
  }else if(current === "yellow"){
    return "red";
  }else if(current === "red"){
    return "green";
    }
  }

  // Best Answer
  function updateLight(current) {
  
    return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green';
  
  }

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

function lovefunc(flower1, flower2){
  // moment of truth
  if(flower1 % 2 === 0 && flower2 % 2 !== 0){
    return true;
  }else if (flower2 % 2 === 0 && flower1 % 2 !== 0){
    return true;
  }else{
    return false;
  }
}

// Best Answer

function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2;
}


// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation){
  if(employed === vacation) {
    return false;
  }else if(employed === true){
    return true;
  }else if(employed === false){
    return false;
  }

}

// Best Answer

const setAlarm = (employed, vacation) => employed && !vacation;

// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). 
// The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let number = sonYearsOld * 2;
  return Math.abs(dadYearsOld - number);
}

// Best Answer

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

var summation = function (num) {
  if (num <= 0) {
       return "Please enter a positive integer greater than 0.";
   } else {
       let total = 0;
       for (let i = 1; i <= num; i++) {
           total += i;
       }
       return total;
   }
}

// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
  return -number;
}

