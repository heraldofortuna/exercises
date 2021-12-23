function groupBy(collection, it) {
  const acumulator = {};

  collection.forEach((item) => {
    let prop = typeof it === "function" ? it(item) : item[it];
    acumulator[prop] = acumulator[prop]
      ? acumulator[prop].concat([item])
      : [item];
  });

  return acumulator;
}
