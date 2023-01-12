const sumAll = function(start, end) {
    let sum = 0
    let smallint 
    let bigint 
    if(typeof(end) != "number"||typeof(start) != "number" ||
    start < 0 || end < 0){
        return "ERROR"
    }else if(start < end){
        smallint = start
        bigint = end
    }else{
        smallint = end
        bigint = start
    }
    for(let i = smallint; i <= bigint; i++){
        sum = sum + i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
