
const palindromes = function (word) {
    
let letters = Array.from(word)
let reversed = letters.reverse()

if (letters === reversed){
    return true;
}
else{
    return false;
}
};


// Do not edit below this line
module.exports = palindromes;
