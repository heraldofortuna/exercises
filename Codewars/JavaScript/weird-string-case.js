function toWeirdCase(string){
  return string.split(" ").map(str => str.split("").map((cur, idx) => idx % 2 !== 0 ? cur : cur.toUpperCase()).join("")).join(" ");
};
