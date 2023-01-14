const fibonacci = function(int) {
    let n1 = 0, n2 = 1, nextTerm;    
    int = Number(int);
    if(int < 0){
        return"OOPS"
    }else if(int == 1){
        return 1
    }
    
    for (let i = 1; i <= int-1; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm
};

// Do not edit below this line
module.exports = fibonacci;
