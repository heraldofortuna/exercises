function triangleType(a, b, c){
  const angles = [lawOfCosines(a, b, c), lawOfCosines(c, a, b), lawOfCosines(b, c, a)];
  let type = 1;

  for (let i = 0; i < angles.length; i++) {
    if (angles[i] >= 180) return 0;

    if (angles[i] > 90) {
      type = 3;
    } else if (angles[i] === 90) {
      type = 2;
    };
  };
  
  return type;
};

const lawOfCosines = (a, b, c) => {
  if (a === 0 || b === 0) return 180;

  const operation = (Math.pow(a, 2) + Math.pow(b, 2) - Math.pow(c, 2)) / (2 * a * b);

  if (operation > 1 || operation < -1) {
    return 180;
  } else {
    return filterSide(180 * (Math.acos(operation)) / 3.1416);
  };
};

const filterSide = (side) => {
  return Number(side.toFixed(2));
};

/* Kata Link: https://www.codewars.com/kata/53907ac3cd51b69f790006c5 */
