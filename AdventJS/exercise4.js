function createXmasTree(height) {
  const log = "_"
    .repeat(height - 1)
    .concat("#")
    .concat("_".repeat(height - 1));

  let xmasTree = "";

  for (let i = 0; i < height + 2; i += 1) {
    if (i >= height) {
      xmasTree += log;
    } else {
      xmasTree += "_".repeat(height - i - 1);
      xmasTree += "*".repeat(2 * i + 1);
      xmasTree += "_".repeat(height - i - 1);
    }

    i !== height + 1 && (xmasTree += "\n");
  }

  return xmasTree;
}
