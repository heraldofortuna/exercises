// Parte 1
const aliensFn = (aliens, days) => {
  const aliensObj = Object.assign({}, aliens);
  const finalAliens = fn(aliensObj, days);
  console.log("Número de aliens:", Object.keys(finalAliens).length);
  return finalAliens;
};

const fn = (aliens, days) => {
  if (days === 0) return aliens;

  let newAliens = {};
  let childs = 0;

  for (const key in aliens) {
    if (aliens[key] === 0) {
      newAliens[key] = 6;
      newAliens[Object.keys(aliens).length + childs] = 8;
      childs += 1;
    } else {
      newAliens[key] = aliens[key] - 1;
    };
  };

  return fn(newAliens, days - 1);
};

aliensFn([3,4,3,1,2], 95);
