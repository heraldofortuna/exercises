function highestRank(arr) {
  let counts = {};
  arr.forEach((num) => {
    counts[num] = (counts[num] || 0) + 1;
  });
  const highest = Math.max.apply(Math, Object.values(counts));
  console.log(counts);
  return parseInt(
    Object.keys(counts)
      .reverse()
      .find((key) => counts[key] === highest)
  );
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]));

/* Kata Link: https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004 */
