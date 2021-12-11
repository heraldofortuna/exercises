function daysToXmas(date) {
  const christmas = new Date("Dec 25, 2021");
  return Math.ceil((christmas - date) / 86400000);
}
