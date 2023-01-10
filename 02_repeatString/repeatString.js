const repeatString = function(strings, repeats) {
    var ConnectedString = ""
    if(repeats < 0){
        return"ERROR"
    }
    for(var i=0; i<repeats; i++){
        ConnectedString = ConnectedString + strings
    }
    return ConnectedString
};

// Do not edit below this line
module.exports = repeatString;
