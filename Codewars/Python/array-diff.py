def array_diff(a, b):
  result = []
  for i in a:
    if not i in b:
      result.append(i)
  return result

# The best:
def array_diff(a, b):
  return [x for x in a if x not in b]

# Kata Link: https://www.codewars.com/kata/523f5d21c841566fde000009
