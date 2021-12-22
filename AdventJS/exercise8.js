function maxProfit(prices) {
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    const price = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - price > profit) {
        profit = prices[j] - price;
      }
    }
  }

  if (profit <= 0) {
    profit = -1;
  }

  return profit;
}
