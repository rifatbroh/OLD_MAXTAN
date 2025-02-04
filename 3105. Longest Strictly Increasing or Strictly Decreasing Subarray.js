/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let n = nums.length;
    let mx = 1, inc = 1, dec = 1;

    if (n===1)
        return 1;
    for (let i=1; i<n; i++) {
        if (nums[i] > nums[i-1]) {
            inc++;
            dec = 1;
        }
        else if (nums[i] < nums[i-1]) {
            dec++;
            inc = 1;
        }
        else {
            inc = dec = 1;
        }
        mx = Math.max(mx, dec, inc);
    }
    return mx;
};