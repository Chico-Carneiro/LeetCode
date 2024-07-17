class Solution {
public:
    bool threeConsecutiveOdds(vector<int>& arr) {
        for (int i = 2; i < arr.size(); i += 3) {
            if (arr[i] % 2 == 1) {
                if (arr[i - 1] % 2 == 1) {
                    if (arr[i - 2] % 2 == 1) return true;
                    if (i + 1 < arr.size() && arr[i + 1] % 2 == 1) return true;
                    else { i++; continue; }
                }
                if (i + 2 < arr.size() && arr[i + 1] % 2 == 1) {
                    if (arr[i + 2] % 2 == 1) return true;
                    else {i += 2; continue;}
                }
                else { i++; continue;}
            }
        }
        return false;
    }

};
