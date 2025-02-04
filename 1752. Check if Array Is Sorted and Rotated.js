/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let cnt = 0, n = nums.length;

    for (let i=0; i<n; i++) {
        if (nums[i] > nums[(i+1) % n])  {
            cnt++;
        }
        if (cnt > 1) {
            return false;
        }
    }
    return true;
};