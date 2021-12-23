function missingReindeer(ids) {
  const arr = ids.sort((a, b) => a - b);
  const found = arr.findIndex((element, index) => element !== index);

  if (found === -1) {
    return ids.length;
  }

  return found;
}
