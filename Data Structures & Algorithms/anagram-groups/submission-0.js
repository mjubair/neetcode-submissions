class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = {};

        for(let s of strs) {
            const sorted = s.split("").sort().join("");

            if(!result[sorted]) {
                result[sorted] = [];
            }

            result[sorted].push(s);
        }

        return Object.values(result);
    }
}
