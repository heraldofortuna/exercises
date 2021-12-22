function pangram(letter) {
  let alphabet = [...Array(26)].map((_, i) => i + 97);

  for (i = 0; i < letter.length; i++) {
    const lowerLetter = letter[i].toLowerCase();
    const codeLetter = lowerLetter.charCodeAt();
    if (codeLetter >= 97 && codeLetter <= 122) {
      alphabet = alphabet.filter((item) => item !== codeLetter);
    }
  }

  return alphabet.length === 0;
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
