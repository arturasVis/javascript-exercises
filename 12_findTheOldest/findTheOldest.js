const findTheOldest = function(people) {
    const oldesPerson=people.reduce((a,b)=>{
        if(!b["yearOfDeath"])
            b["yearOfDeath"]=(new Date().getFullYear())
        if(a.yearOfDeath-a.yearOfBirth<b.yearOfDeath-b.yearOfBirth)
            a=b
        return a
    },{name:"",yearOfBirth:0,yearOfDeath:0})
    return oldesPerson
};

// Do not edit below this line
module.exports = findTheOldest;
