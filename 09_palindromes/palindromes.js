const palindromes = function (string) {
    let replacedString=string.replaceAll(/[\W\s]/g,"").toLowerCase()
    let reversedString= replacedString.toLowerCase().split("").reverse().join("")
    return reversedString == replacedString
};

// Do not edit below this line
module.exports = palindromes;
