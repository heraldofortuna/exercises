function iterateStore(store) {
  if (typeof store === "string") {
    return store;
  } else {
    return Object.values(store).map(iterateStore).flat();
  }
}

function contains(store, product) {
  const stock = iterateStore(store);
  return stock.includes(product);
}
