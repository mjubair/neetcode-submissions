class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Map();
        
        for(let i = 0; i < nums.length; i++) {
            if(hash.has(nums[i])) {
                hash.set(nums[i], hash.get(nums[i]) + 1);
            } else {
                hash.set(nums[i], 1);
            }
        }

        for(let i = 0; i < nums.length; i++) {
            if(hash.get(nums[i]) > 1) {
                return true;
            } 
        }

        return false;
    }
}
