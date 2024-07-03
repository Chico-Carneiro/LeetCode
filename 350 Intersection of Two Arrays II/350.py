class Solution:
    def intersect(self, nums1: List[int], nums2: List[int]) -> List[int]:
        map = {}
        res = []
        for x in nums1:
            map[x] = map.get(x,0) + 1
            #map[x] = (map[x] + 1) or 1
        
        for x in nums2:
            value = map.get(x,False)
            if value:
                res.append(x)
                map[x] = value - 1
        return res
