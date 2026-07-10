class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        splittyS = list(s)
        splittyS.sort()  
        stringS = "".join(splittyS)

        splittyT = list(t)
        splittyT.sort()
        stringT = "".join(splittyT) 
        
        return stringS == stringT