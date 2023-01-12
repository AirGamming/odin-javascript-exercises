const removeFromArray = function(arr, ...rmItems) {
    
    rmItems.forEach(el => {
        
        let indexRmItem = arr.indexOf(el);
        if(indexRmItem == -1){}
        else{
        arr.splice(indexRmItem,1) 
        }
    });
    return arr   
};

// Do not edit below this line
module.exports = removeFromArray;
