/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function(nums) {
    const combination = (n) => (n * (n - 1)) / 2;

    let mp = new Map();
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let product = nums[i] * nums[j];
            mp.set(product, (mp.get(product) || 0) + 1);
        }
    }

    let cnt = 0;
    for (let [key, value] of mp) {
        cnt += 8 * combination(value);
    }

    return cnt;
};
