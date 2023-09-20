function firstNonRepeatingLetter(s) { 
    let letters = s.split("");
    let counter = 0; 
    for (let letter of letters){
        for (let char of letters){
            if(char.toUpperCase() === letter.toUpperCase()){
                counter += 1;
            }
        }
        if(counter === 1){
            return letter;
        }
        counter = 0;
    }
    return "";
}

console.log(firstNonRepeatingLetter("stress")); 

