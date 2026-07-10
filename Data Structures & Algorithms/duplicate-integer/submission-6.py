class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        NewDictionary: dict[int, int] = {
        
        }

        for i in nums:
          try:
              if NewDictionary[i]:
                counter = NewDictionary[i] + 1
                NewDictionary[i] = counter
              
        
          except:
                NewDictionary.update({i : 1}) 
 
        return len(list(filter(lambda c: c > 1, NewDictionary.values()))) >= 1
        

        