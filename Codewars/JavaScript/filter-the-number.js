var filterString = function(value) {
  const numbers = Array.from(Array(10).keys());

  return Number(value.split("").filter(char => numbers.includes(Number(char))).join(""));
};
