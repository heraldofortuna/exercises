const input_small = [3,4,3,1,2];

const aliens_linear = function(days, aliens) {
  let states = Array(9);

  for (let i = 0; i < 9; i++) states[i] = 0;

  for (const alien of aliens) {
    states[alien] += 1;
  };

  for(let j = 0; j < days; j++) {
    // [0, 1, 1, 2, 1, 0, 0, 0, 0]
    let new_aliens = states.shift();
    // [1, 1, 2, 1, 0, 0, 0, 0]
    states.push(new_aliens);
    // [1, 1, 2, 1, 0, 0, 0, 0, 0]
    states[6] += new_aliens;
  };

  return states.reduce((accum, curr) => accum + curr);
};

console.log(aliens_linear(18, input_small));
console.log(aliens_linear(80, input_small));
console.log(aliens_linear(256, input_small));
