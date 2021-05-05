function findEvenIndex(arr) {
  function sum(arr) {
    return arr.reduce((a, b) => {
      return a + b;
    }, 0);
  }

  return arr.findIndex((_, i, arr) => {
    return sum(arr.slice(0, i)) === sum(arr.slice(i + 1, arr.length));
  });
}

/* Kata Link: https://www.codewars.com/kata/5679aa472b8f57fb8c000047 */
