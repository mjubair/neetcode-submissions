class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const sortedS = s.split("").sort().join("");
        const sortedt = t.split("").sort().join("");

        if(sortedS == sortedt) return true;
        return false;
    }
}
