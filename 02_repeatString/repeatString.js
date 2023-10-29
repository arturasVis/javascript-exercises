const repeatString = function(string,num) {
    let returnWord=""
    if(num<0)
        return "ERROR"
    for(let i=0;i<num;i++)
    {
        returnWord+=string
    }
    return returnWord
};

// Do not edit below this line
module.exports = repeatString;
