const convertToCelsius = function(number) {
  if(!typeof(number) == "number"){
    return "ERROR"
  }else{ 
    let celcius = Math.round(((number - 32) * 0.5556) * 10) / 10
    return celcius
  }
};

const convertToFahrenheit = function(number) {
  if(!typeof(number) == "number"){
    return "ERROR"
  }else{ 
    let celcius = Math.round(((number * 1.8) + 32) * 10) / 10
    return celcius
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
