class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        // for loop summing the neighbors, two variables and each variable gets "replaced" and there needs to be an if statement to check if the two variables get added up to the target
        // once that condition get met, break
        // else continue through the loop

        const output: number[] = [];
        for ( let i = 0; i < nums.length - 1; i++ ) {
            // create a variable that becomes the sum of the two indices
            // then if statement to compare the summed variable to the target
            // break if true
            // else keep looping ( keep summing indices )
            for (let j = i + 1; j < nums.length; j++) {
              if (i === j) continue;
              const summed_value = nums[i] + nums[j];
              if (summed_value === target) {
                output.push(i);
                output.push(j);
              }
            }
        }
        return output;

    }
}