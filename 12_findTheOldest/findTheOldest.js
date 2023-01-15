const findTheOldest = function (arr) {
    let oldestName ={};
    let oldest = 0;
    arr.forEach((el) => {
      age = el.yearOfDeath - el.yearOfBirth
      let currentYear = new Date().getFullYear();
      if (
        el.hasOwnProperty('yearOfDeath') && el.yearOfDeath - el.yearOfBirth >= oldest
      ) {
        oldest = el.yearOfDeath - el.yearOfBirth;
        oldestName = el;
        console.log(oldest)
      } else if (currentYear - el.yearOfBirth > oldest && !el.hasOwnProperty('yearOfDeath') ) {
        oldest = (currentYear - el.yearOfBirth)
        oldestName = el;
      }
    });
    console.log(oldest)
    return oldestName;
  };
// Do not edit below this line
module.exports = findTheOldest;
