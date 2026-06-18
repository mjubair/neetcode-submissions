class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = new Set();
        
        for(let i = 0; i < nums.length; i++) {
            if(hash.has(nums[i])) return true;
            hash.add(nums[i]);
        }

        return false;
    }
}
