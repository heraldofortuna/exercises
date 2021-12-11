function isValid(letter) {
  let valid = true;
  const arr = letter.split(" ");

  arr.map((str) => {
    let parentheses = 0;
    str.split("").map((letter) => {
      if (letter === "(") {
        parentheses += 1;
      } else if (letter === ")") {
        parentheses -= 1;
      } else if (letter === "{" || letter === "[") {
        valid = valid && false;
      }
    });
    if (parentheses !== 0) {
      valid = valid && false;
    }
    parentheses = 0;
  });

  console.log(valid);
  return valid;
}

isValid("bici coche (balón) bici coche peluche"); // -> ✅
isValid("(muñeca) consola bici"); // ✅

isValid("bici coche (balón bici coche"); // -> ❌
isValid("peluche (bici [coche) bici coche balón"); // -> ❌
isValid("(peluche {) bici"); // -> ❌
isValid("() bici"); // ❌
