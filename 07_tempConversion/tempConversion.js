const ftoc = function(fahrenheit) {
  let c_Conversion = (fahrenheit - 32) * (5/9);
    if (c_Conversion === 0){
      return(c_Conversion);
    } else{
      let finalConversion = Math.round(c_Conversion * 10) / 10;
      return(finalConversion);
    }
  };
  
  const ctof = function(celsius) {
    let f_Conversion = celsius * (9/5) + 32;
    if(f_Conversion === 0){
      return(f_Conversion);
    }else {
      let finalConversion2 = Math.round(f_Conversion * 10) / 10;
      return(finalConversion2);
    }
  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
