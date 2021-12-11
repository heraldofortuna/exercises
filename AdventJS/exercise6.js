function sumPairs(numbers, result) {
  for (let i in numbers) {
    for (let j in numbers) {
      if (numbers[i] + numbers[j] === result && i !== j) {
        return [numbers[i], numbers[j]];
      }
    }
  }

  return null;
}
