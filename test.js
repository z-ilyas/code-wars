function accum(s) {
	// your code
//   Split each character in the strinng (done)
//   Use index number + 1 to multiple each character in the string(done)
//   Have the first latter in character as Capital
//   Have - in between each character(done)
let char = s.split('');
    // console.log(char);
let result = [];
for(let letter of char){
    // console.log(char.indexOf(letter));
    let numberOfDublicates = char.indexOf(letter) + 1;
    // console.log(numberOfDublicates);
    let actualLetter = letter.toUpperCase(); 
    // console.log(actualLetter);
    // - is making every letter capital
    let newLetter = letter.repeat(numberOfDublicates - 1);
    // console.log(newLetter);
    result.push(actualLetter + newLetter);
    // console.log(result); 
    // - Super struggled here cuz i forgot to make a new array
    }
    let joinedLetters = result.join('-');
    console.log(joinedLetters); 
    // // - Super struggled cuz i forgot they were in an array and not a joined. 😭
    return joinedLetters;

 
}

accum("aaaa");