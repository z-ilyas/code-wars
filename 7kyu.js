// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

function filter_list(l) {
    // Return a new array with the strings filtered out
    let New = [];
    for (let i of l){
      if(typeof i === 'number'){
        New.push(i);
      }
    }
    return New;
  }
  
  // Best Answer
  
  function filter_list(l) {
    return l.filter(function(v) {return typeof v == 'number'})
  }

// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:
// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s){
    let g = s.length;
    let a = Math.floor(g / 2);
  
    if(g % 2 === 0){
      return s.slice(a-1, a+1);
    }else{
      return s.charAt(a);
    }
  }

// Best Answer

function getMiddle(s)
{
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}

// Write a function that removes the spaces from the string, then return the resultant string.

// Examples:

// Input -> Output
// "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
// "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
// "8aaaaa dddd r     " -> "8aaaaaddddr"

function noSpace(x){
    let s = x.replace(/\s/g, "");
    return s;
  }

// Best Answer

function noSpace(x){
    return x.replace(/\s/g, '');
  }

// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    let newString = "";
    for (let str of [s1, s2]){
      for (let chr of str){
        if(!newString.includes(chr)){
            newString += chr;
        }
      }
    }
    let alpha = newString.split('').sort().join('');
    return alpha;
  }

// Best Answer

const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

  
  
function firstNonRepeatingLetter(s) { 
let letters = s.split("");
console.log(letter);
let counter = 0; 
for (let letter of letters){
  console.log(letter);
}
}

// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

// Examples

// * Input: [1,2,3,4,5], output = [2,3,4,5]
// * Input: [5,3,2,1,4], output = [5,3,2,4]
// * Input: [2,2,1,2,1], output = [2,2,2,1]

function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return []; // Return an empty array if the input array is already empty.
  }

  let minValue = numbers[0];
  let minIndex = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      minValue = numbers[i];
      minIndex = i;
    }
  }

  const result = numbers.slice(0, minIndex).concat(numbers.slice(minIndex + 1));

  return result;
}

// This time no story, no theory. The examples below show you how to write function accum:

// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
//   Split each character in the strinng (done)
//   Use index number + 1 to multiple each character in the string(done)
//   Have the first latter in character as Capital
//   Have - in between each character(done)
let char = s.split('');
    // console.log(char);
let result = [];
   for ( let i = 0; i < char.length; i++){
        let letter = char[i];
        let numberOfDublicates = i + 1;
        let actualLetter = letter.toUpperCase();
        letter = letter.toLowerCase();
        let newLetter = letter.repeat(numberOfDublicates - 1);
        result.push(actualLetter + newLetter);
    }
    let joinedResult = result.join('-')
    return joinedResult;
}


// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  // Go for it
  let wordArray = str.split(' ');
//   let new = split.reverse();
  let reverseString = [];
  for (let word of wordArray){
    let letter = word.split('');
    let reverseLetter = letter.reverse();
    let reverseWord = reverseLetter.join('');
    reverseString.push(reverseWord);
  }
  let reverseSentence = reverseString.join(' ');
        console.log(reverseSentence);
  return reverseSentence;
}

// Best Answer 

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
  let newStr = str.split(' ');
  const vowelsToRemove = /[aeiouAEIOU]/g;
  let fixedString = newStr.map(word => word.replace(vowelsToRemove, ''));
  let theFixedString = fixedString.join(' ');
  return theFixedString;
}

// Best Answer 

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

function isIsogram(str) {
  const strLower = str.toLowerCase(); 
  const seen = new Set();

  for (let letter of strLower) {
    if (seen.has(letter)) {
      return false; 
    }
    seen.add(letter);
  }

  return true; 
}

// Best Answer
function isIsogram(str){
	return new Set(str.toUpperCase()).size == str.length;
}

// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  let words = s.split(" ");
  let minCounter = 100;
  for (let word of words){
    let counter = 0;

    for (let letter of word){
      counter += 1;
    }
    if(counter < minCounter){
      minCounter = counter;
    }
  }
  console.log(minCounter);
  return minCounter;
}

// Best Answer 

function findShort(s){
  return Math.min(...s.split(" ").map (s => s.length));
}


// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// Years divisible by 4 are leap years,
// but years divisible by 100 are not leap years,
// but years divisible by 400 are leap years.
// Tested years are in range 1600 ≤ year ≤ 4000.

function isLeapYear(year) {
  // TODO
  if (year % 400 == 0){
    return true;
  }else if(year % 100 == 0){
   return false;
  }else if(year % 4 == 0){
    return true;
  }else {
    return false;
  }
}

// Best Answer

function isLeapYear(year) {
  return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
}