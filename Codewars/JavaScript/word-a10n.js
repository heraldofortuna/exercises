function abbreviate(string) {
  const arr = string.split(" ");
  let words = arr.map((item) =>
    item.length >= 4
      ? item[0] + item.slice(1, -1).length.toString() + item[item.length - 1]
      : item
  );
  return words;
  // return words.join(" ");
}

console.log(abbreviate("elephant-ride")); /* e6t-r2e */
console.log(abbreviate("Accessibility")); /* A11y */
console.log(
  abbreviate("elephant-rides are really fun!")
); /* e6t-r3s are r4y fun! */

/* Kata Link: https://www.codewars.com/kata/5375f921003bf62192000746 */
