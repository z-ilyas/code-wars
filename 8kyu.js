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

