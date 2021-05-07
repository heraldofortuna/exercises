function titleCase(title, minorWords) {
  if (title == "") {
    return "";
  }
  if (minorWords == undefined) {
    minorWords = "";
  }
  title = title.toLowerCase().split(" ");
  minorWords = minorWords.toLowerCase().split(" ");
  for (let i in title) {
    if (minorWords.includes(title[i]) == false || i == 0) {
      title[i] =
        title[i].charAt(0).toUpperCase() + title[i].toLowerCase().slice(1);
    }
  }
  return title.join(" ");
}

/* Kata Link: https://www.codewars.com/kata/5202ef17a402dd033c000009 */
