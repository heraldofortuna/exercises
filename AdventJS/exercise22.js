function countDecorations(bigTree) {
  return Object.values(bigTree).reduce((decorations, branch) => {
    if (branch === null) return decorations;
    return !isNaN(branch)
      ? decorations + branch
      : decorations + countDecorations(branch);
  });
}
