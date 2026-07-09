class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        /*
            in the for loop, were initialzing a new variable to proceed to the next number within the array
            the first number is always fine doens't raise any flags, but theres needs to be a counter for every numbers iterated through
            the array, as long as the count is always 1, the output should remain false
            but if the counter gets counted twice than we raise the boolean to be true
        */
        // counter initialized
        let map = new Map<number, number>();
        // for loop is iterating through the array
        for (const num of nums) {
            // the condition should check each value spot but also needs logic to check a number twice
            if ( map.has(num)  ) {
                const counter = map.get(num) + 1;
                map.set(num, counter);

            }
            else {
                map.set(num, 1)
            }
        }
        // .values = values of the keys
        // .key = key values of the map
        // .entries outputs both key and values of the map
        const counters = map.values();
        return [...counters].filter((n) => n > 1).length >= 1;
        // checking what the values are in our map
        // next is to print it and attach a boolean statement to that counter value
       
        console.log( map.get(1))
    }
}
