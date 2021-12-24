function listGifts(letter) {
  const list = letter.split(" ");
  let resultObject = {};

  list.forEach((gift) => {
    if (gift[0] !== "_" && gift !== "") {
      if (gift in resultObject) {
        resultObject[gift] += 1;
      } else {
        resultObject[gift] = 1;
      }
    }
  });

  return resultObject;
}
