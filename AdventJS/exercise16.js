function decodeNumber(symbols) {
  let number = 0;
  const values = {
    ".": 1,
    ",": 5,
    ":": 10,
    ";": 50,
    "!": 100,
  };

  for (let i = 0; i < symbols.length; i++) {
    if (values[symbols[i]] < values[symbols[i + 1]]) {
      number -= values[symbols[i]];
    } else {
      number += values[symbols[i]];
    }
  }

  return number;
}
