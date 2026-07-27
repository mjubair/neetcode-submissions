class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;

        const hash = new Map();

        for(const char of s) hash.set(char, (hash.get(char) || 0) + 1)

        for(const char of t) {
            const c = hash.get(char);
            if(!c) return false;
            hash.set(char, c - 1);
        }

        return true;

    }
}
