function pangram(letter) {
  const alphabet = "abcdefghijklmnñopqrstuvwxyz".split("");
  const lower = letter.normalize().toLowerCase();
  return alphabet.every((character) => lower.includes(character));
}

console.log(pangram("Extraño pan de col y kiwi se quemó bajo fugaz vaho")); // true
console.log(
  pangram("Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!")
); // true

console.log(
  pangram(
    "Esto es una frase larga pero no tiene todas las letras del abecedario"
  )
); // false
console.log(pangram("De la a a la z, nos faltan letras")); // false
