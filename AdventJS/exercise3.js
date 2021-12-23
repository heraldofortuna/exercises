function isValid(letter) {
  let characters = letter.split("");
  let parenthesis = 0;

  characters.map((character) => {
    if (character === "(") {
      parenthesis += 1;
    } else if (character === ")") {
      parenthesis -= 1;
    }
  });

  if (
    parenthesis !== 0 ||
    letter.match(/[\[\[{}]/g) ||
    letter.match(/[)]\w+[(]|[(][)]/g)
  ) {
    return false;
  }

  return true;
}
