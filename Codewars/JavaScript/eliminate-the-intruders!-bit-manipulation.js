function eliminateUnsetBits(number) {
  let sum = 0;
  
  for (let i = 0; i < number.split("").filter(item => item === "1").join("").length; i++) {
    sum += 1 * Math.pow(2, i);
  };
  
  return sum;
};
