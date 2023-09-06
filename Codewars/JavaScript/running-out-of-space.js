function spacey(array){
  return array.map((item, idx) => array.slice(0, idx + 1).reduce((acc, cur) => acc + cur, ""));
};