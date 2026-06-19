class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false;
        
        const counterS = new Map();

        for(const char of s) {
            if(counterS.has(char)) {
                counterS.set(char, counterS.get(char) + 1)
            } else {
                counterS.set(char, 1);
            }
        }


        const counterT = new Map();
        for(const char of t) {
            if(counterT.has(char)) {
                counterT.set(char, counterT.get(char) + 1)
            } else {
                counterT.set(char, 1);
            }
        }
        for(const [key, value] of counterS) {
            if(counterS.get(key) !== counterT.get(key)) return false
        }

        return true;

    }
}
