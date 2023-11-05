const fibonacci = function(fibPos) {
    let fibNumber=[0,1]
    if(fibPos<0)
        return "OOPS"
    for(let i=2;i<=fibPos;i++)
    {
        const nextNumber=fibNumber[i-1]+fibNumber[i-2]
        fibNumber[i]=nextNumber
    }
    return fibNumber[fibPos]
};

// Do not edit below this line
module.exports = fibonacci;
