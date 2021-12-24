function getCoins(change) {
  const coins = [50, 20, 10, 5, 2, 1];
  let money = change;

  return coins
    .map((coin) => {
      const num = Math.trunc(money / coin);
      money -= coin * num;
      return num;
    })
    .reverse();
}
