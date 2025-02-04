/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function(nums) {
    let n = nums.length;
    let sum = nums[0];

    //vector<int> v;
    let v = [];
    for (let i=1; i<n; i++) {
        if (nums[i] > nums[i-1]) {
            sum += nums[i];
        }
        else {
            v.push(sum);
            sum = nums[i];
        }
    }
    v.push(sum);
    //return *max_element(v.begin(), v.end());
    return Math.max(...v);
};