def two_sum(numbers, target):
  for i in range(len(numbers)):
    for j in range(len(numbers)):
      if numbers[i] + numbers[j] == target and i != j:
        return [i, j]

# The best:
def two_sum(nums, t):
  for i, x in enumerate(nums):
    for j, y in enumerate(nums):
      if i != j and x + y == t:
        return [i, j]
        
# Kata Link: https://www.codewars.com/kata/52c31f8e6605bcc646000082
