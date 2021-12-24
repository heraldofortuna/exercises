function learn(time, courses) {
  const times = { time: 0, courses: null };

  for (let i in courses) {
    for (let j in courses) {
      const sum = courses[i] + courses[j];
      if (sum <= time && i !== j && sum > times.time) {
        times.time = sum;
        times.courses = [Number(i), Number(j)];
      }
    }
  }

  return times.courses;
}
