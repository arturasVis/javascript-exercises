const sumAll = function(num1,num2) {
    if(num1<0 || num2 <0)
        return "ERROR"
    let temp
    if(num1>num2)
    {
        temp=num1
        num1=num2
        num2=temp
    }
    function isArray(number) {
        return number.constructor===Number;
      }
    if(!isArray(num1) || !isArray(num2))
        return "ERROR"    
    let sum=0
    for(let i=num1;i<=num2;i++)
        sum+=i
    return sum
};

// Do not edit below this line
module.exports = sumAll;
