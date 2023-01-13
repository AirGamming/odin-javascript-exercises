const add = function(num1, num2) {
	return num1+num2
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(arr) {
	let equasion = 0
  arr.forEach(element => {
    equasion = equasion + element
  });
  return equasion
}

const multiply = function(arr) {
  let equasion = 1
  arr.forEach(el => {
    equasion =equasion*el
  });
  return equasion
};

const power = function(num1, num2) {
	return Math.pow(num1,num2)
};

const factorial = function(num) {
	let equasion = 1
  if(num == 0){
    return 1
  }
  for(i=1; i<=num;i++){
    equasion = equasion * i
  }
  return equasion;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
