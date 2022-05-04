const findTheOldest = function(array) {
    const ordered = array.sort(function(a, b){
        const thisYear = new Date().getFullYear();
        const lastPerson = (a.yearOfDeath || thisYear) - a.yearOfBirth;
        const nextPerson = (b.yearOfDeath || thisYear) - b.yearOfBirth;
        if(lastPerson > nextPerson) {
            return -1;
        }else{
            return 1;
        }
    })

    return ordered[0];
};


// Do not edit below this line
module.exports = findTheOldest;
