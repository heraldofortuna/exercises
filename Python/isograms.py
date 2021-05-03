def is_isogram(string):
  result = True
  string = string.upper()
  word = string
  for letter in string:
    word = word[1:]
    if letter in word:
      result = False
  return result

# The best:
def is_isogram(string):
  return len(string) == len(set(string.lower()))

# Kata Link: https://www.codewars.com/kata/54ba84be607a92aa900000f1