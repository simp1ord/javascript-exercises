const findTheOldest = function(people){
    people.sort((a, b) => {
        if (a.yearOfDeath === undefined){
          let d = new Date();
         let aDeathYear = d.getFullYear();
          let firstPerson = aDeathYear - a.yearOfBircth;
          let secondPerson = b.yearOfDeath - b.yearOfBirth;
         return firstPerson-secondPerson;
        } else if(b.yearOfDeath === undefined) {
         let d2 = new Date();
         let bDeathYear = d2.getFullYear();
         let firstPerson = a.yearOfDeath - a.yearOfBirth;
          let secondPerson = bDeathYear - b.yearOfBirth;
         return firstPerson-secondPerson;
       }else {
         let firstPerson = a.yearOfDeath - a.yearOfBirth;
         let secondPerson = b.yearOfDeath - b.yearOfBirth;
         return firstPerson-secondPerson;
        }
     });
     let oldest = people.pop();
     return(oldest);
 };
// Do not edit below this line
module.exports = findTheOldest;
