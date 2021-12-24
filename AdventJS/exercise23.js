function canReconfigure(from, to) {
  if (from.length !== to.length) {
    return false;
  }

  let stack = {};

  for (let i = 0; i < to.length; i++) {
    if (
      (Object.keys(stack).includes(from[i]) ||
        Object.values(stack).includes(to[i])) &&
      stack[from[i]] !== to[i]
    ) {
      return false;
    } else {
      stack[from[i]] = to[i];
    }
  }

  return true;
}
