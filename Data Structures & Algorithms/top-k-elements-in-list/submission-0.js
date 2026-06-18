class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const result = {};

        for(let i = 0; i < nums.length; i++) {
            const num = nums[i];
            result[num] = (result[num] || 0) + 1;
        }

        const sorted = Object.entries(result).sort((a, b) => b[1] - a[1]);


        return sorted.slice(0, k).map(([num, _]) => Number(num));

    }
}
