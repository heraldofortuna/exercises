function getMinJump(obstacles) {
  const size = Math.max(...obstacles);
  let jumps = 0;

  for (let i = 1; i < size; i++) {
    let valid = true;
    for (let j = 0; j <= size / i; j++) {
      valid = valid && !obstacles.includes(i * j);
      if (!valid) break;
    }

    if (valid) {
      jumps = i;
      break;
    }
  }

  return jumps;
}
