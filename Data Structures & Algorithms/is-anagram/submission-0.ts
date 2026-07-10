class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        // create a map of every letter inside the string, and then add a counter for every letter, and then compare to see if those two
        // strings hit the same letters from both strings and if so return true

        // Create a map
        // for loop
        // counter
        // comparison logic
        // return boolean
      const letters = s.split("").sort().join("");
        const secondLetters = t.split("").sort().join("");
        return letters === secondLetters;
    }
}
