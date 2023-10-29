const removeFromArray = function(array,...manyMoreArgs) {
    let newArray=array
    let indexOf,a,b
    for(let i=0;i<manyMoreArgs.length;i++)
    {
        a=manyMoreArgs[i]
        for(let k=0;k<array.length;k++)
        {
            b=array[k]
            if(a===b)
            {
                indexOf=array.indexOf(a)
                if(indexOf>-1)
                    newArray.splice(indexOf,1)
            }
        }
        
    }

    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
