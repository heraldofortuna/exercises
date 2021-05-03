def nb_dig(n, d):
  count = 0
  for i in range(n + 1):
    for j in str(i ** 2):
      if str(j) == str(d):
        count += 1
  return count

# The best:
def nb_dig(n, d):
  return sum(str(i*i).count(str(d)) for i in range(n+1))
  
# Kata Link: https://www.codewars.com/kata/566fc12495810954b1000030
