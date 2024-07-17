class Solution:
    def threeConsecutiveOdds(self, arr: List[int]) -> bool:
        for i in range(2,len(arr),3):
            if arr[i] % 2:
                if arr[i-1] % 2:
                    if arr[i-2] % 2: return True
                    if i+1 < len(arr) and arr[i+1] % 2: return True
                    else:
                        i+=1
                        continue
                
                if i+2 < len(arr) and arr[i+1] % 2:
                    if arr[i+2] % 2:
                        return True
                    else:
                        i+=2
                        continue
                
                else:
                    i+=1
                    continue

        return False
