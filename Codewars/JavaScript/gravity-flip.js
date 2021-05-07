const flip = (d, a) => {
  a.sort((x, y) => x - y);
  return d === "R" ? a : a.reverse();
};

/* Kata Link: https://www.codewars.com/kata/5f70c883e10f9e0001c89673 */
