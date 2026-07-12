class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
      // First loop through the array
      // create two loops *outter to check every indices for a matching anagram pair*
      // if words match, set them in a group within in an array

      const groups = new Map<string, string[]>();

      for ( let i = 0; i < strs.length; i++) {
        const key = strs[i].split("").sort().join("")
        // "act" -> act
        // "cat" -> act
        if ( !groups.has(key) ) {
          groups.set(key, [strs[i]])
        }

        else {
          const existing = groups.get(key)
          existing.push(strs[i])
          groups.set(key, existing)
        }
      }

    return [...groups.values()]

    }

}
