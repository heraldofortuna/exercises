function validSpacing(s) {
  if (s === "") {
    return true;
  } else {
    return !s.split(" ").includes("");
  }
}
