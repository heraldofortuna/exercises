function validSpacing(s) {
  if (s === "") {
    return true;
  } else {
    return !s.split(" ").includes("");
  }
}

/* Kata Link: https://www.codewars.com/kata/5f77d62851f6bc0033616bd8 */
