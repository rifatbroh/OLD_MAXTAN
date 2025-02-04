/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isArraySpecial = function(nums) {
    let n = nums.length;

    for (let i=0; i<n-1; i++) {
        if (nums[i]%2 == 0 && nums[i+1]%2 == 0) {
            return false;
        }
        else if (nums[i]%2 == 1 && nums[i+1]%2 == 1) {
            return false;
        }
    }
    return true;
};