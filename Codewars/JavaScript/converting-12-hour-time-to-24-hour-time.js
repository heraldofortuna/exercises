function to24hourtime(hour, minute, period) {
  return `${pad(period === "pm" ? hour % 12 + 12 : hour % 12)}${pad(minute)}`; 
};
  
function pad(d) {
  return (d < 10) ? '0' + d.toString() : d.toString();
};
