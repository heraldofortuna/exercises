function factorial(n){
  if (typeof n !== "number" || n < 0) return null;
  if (n === 0 || n === 1) return "1";
  
  let mult = 1;
  let aux;

  for (let i = 1; i <= n; i++) {
    mult = multiplication(mult, i);
  };
  
  return mult;
};

const multiplication = (a, b) => {
  const arrA = a.toString().split("").reverse().map(item => Number(item));
  const arrB = b.toString().split("").reverse().map(item => Number(item));
  let rest = 0;
  let result = [];
  
  for (let i = 0; i < arrA.length; i++) {
    let sum = 0;
    
    for (let j = 0; j < arrB.length; j++) {
      sum += (arrB[j] * Math.pow(10, j)) * arrA[i];
    };

    sum += rest;

    if (i === arrA.length - 1) {
      result.push(sum);
    } else {
      const len = sum.toString().split("").length;
      const num = len === 1 ? sum : sum % 10;

      rest = Math.trunc(sum / 10);

      result.push(num);
    };
  };

  return result.map(item => item.toString()).reverse().join("");
};
