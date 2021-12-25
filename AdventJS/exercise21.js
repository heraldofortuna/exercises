function canCarry(capacity, trip) {
  const maxStop = Math.max(...trip.reduce((acc, stop) => [...acc, stop[2]]));
  const stops = Array.from({ length: maxStop }, (_, i) => i + 1);

  return stops.reduce((loaded, stopNumber) => {
    const stop = trip.filter((stop) => stop[1] === stopNumber)[0] || null;
    const stopLeaveGifts = trip.filter((tmpStop) => tmpStop[2] === stopNumber);
    const leave =
      stopLeaveGifts.reduce(
        (acc, stopLeaveGift) => acc + stopLeaveGift[0],
        0
      ) || 0;
    const take = stop ? stop[0] : 0;
    loaded = loaded + take - leave;
    if (loaded > capacity) {
      return false;
    }
    return loaded;
  }, 0) === 0
    ? true
    : false;
}
