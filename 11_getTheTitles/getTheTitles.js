const getTheTitles = function(arr) {
    let newArr = []
    arr.forEach(el => {
        newArr.push(el.title)
    });
    return newArr
};

// Do not edit below this line
module.exports = getTheTitles;
