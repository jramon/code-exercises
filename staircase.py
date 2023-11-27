def staircase2(n):
  prev = 1
  prevprev = 1
  curr = 0

  for i in range(2, n + 1):
    curr = prev + prevprev

    prevprev = prev
    prev = curr
	
  return curr

print(staircase2(2))