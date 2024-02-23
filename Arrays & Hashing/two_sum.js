/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let sortedmap = new Map()

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]
        // console.log(sortedmap, difference);
        if (sortedmap.has(difference)) {
            return [i, sortedmap.get(difference)]
        }

        sortedmap.set(nums[i], i)
    }
};

nums = [2,15,11,7]
target = 9

console.log(twoSum(nums, target))