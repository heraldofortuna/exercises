function countZeros(n) {
  if (n % 2 === 0) {
    let zeros = 0, fives = 0;
    
    for (let i = 10; i <= n; i += 10) {
      zeros += countFives(i, fives);
    };
    
    return zeros;
  };
  
  return 0;
};

const countFives = (n, fives) => {
  if (n % 5 === 0) {
    fives += 1
    
    return countFives(n / 5, fives)
  } else {
    return fives;
  };
};
