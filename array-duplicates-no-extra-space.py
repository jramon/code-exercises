class Solution(object):
  def findDuplicates(self, nums):
    outputs = []
    for n in nums:
      value = abs(n) - 1
      if nums[value] < 0:
        outputs.append(abs(n))
      else:
        nums[value] = nums[value] * -1
    return outputs
    
Solution().findDuplicates([4,3,2,7,8,2,3,1])