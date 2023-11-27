class Solution:
    def fibIterative(self, n):
        stack = []
        # stack of seen elements
        stack.append(n)
        sum = 0
        while(len(stack) > 0):
            n = stack.pop()
            if n == 0:
                sum += 0
            elif n == 1:
                sum +=1
            else:
                stack.append(n-1)
                stack.append(n-2)
        return sum

s = Solution()
# Fibonacci of n
print(s.fibIterative(10))