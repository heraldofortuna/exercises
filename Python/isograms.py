# Instruccions
"""
An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
Implement a function that determines whether a string that contains only letters is an isogram. 
Assume the empty string is an isogram. Ignore letter case.

is_isogram("Dermatoglyphics" ) == true
is_isogram("aba" ) == false
is_isogram("moOse" ) == false # -- ignore letter case
"""

# My solution:
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
