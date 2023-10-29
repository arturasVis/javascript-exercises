const reverseString = function(word) {
    let wordLength=word.length
    let newWord=""
    for(let i=wordLength-1;i>=0;i--)
    {
        newWord+=word[i]
    }
    return newWord
};

// Do not edit below this line
module.exports = reverseString;
