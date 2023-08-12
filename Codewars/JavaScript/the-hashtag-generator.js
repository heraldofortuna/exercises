function generateHashtag (str) {
  let trimmed = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      if (i === 0 || str[i - 1] === " ") {
        trimmed += str[i].toUpperCase()
      } else {
        trimmed += str[i];
      };
    };
  };

  if (trimmed === "" || trimmed.length > 139) return false;
  
  const hashtag = "#" + trimmed;

  return hashtag;
};
