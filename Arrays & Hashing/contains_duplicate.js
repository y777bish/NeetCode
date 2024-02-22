/**
 * @param {number[]} nums
 * @return {boolean}
 */
const duplicates = []
var containsDuplicate = function(nums) {
    const sett = new Set(nums); return sett.size !== nums.length
};

nums = [1,2,3,4,4]
console.log(containsDuplicate(nums))