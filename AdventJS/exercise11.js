function shouldBuyFidelity(times) {
  const normal = 12 * times;
  let fidelity = 250;

  for (let i = 1; i <= times; i++) {
    fidelity += 12 * Math.pow(0.75, i);
  }

  return fidelity < normal;
}
