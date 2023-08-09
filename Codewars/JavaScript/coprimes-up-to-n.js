function coprimes(n){
  let coprimeList = [];
  
  for (let i = 2; i < n; i++) {
    const contains = divisors(n).some(element => {
      return divisors(i).includes(element);
    });

    if (!contains) {
      coprimeList.push(i);
    };
  };
  
  coprimeList.unshift(1);

  return coprimeList;
};

const divisors = (number) => {
  let divisorList = [];
  
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      divisorList.push(i);
    };
  };
  
  return divisorList;
};
