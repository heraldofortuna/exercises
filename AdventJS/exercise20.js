function pangram(letter) {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  const lower = letter.normalize().toLowerCase();
  return alphabet.every((character) => lower.includes(character));
}
