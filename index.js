/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b);

    let answer = 1 << 30;

    const n = nums.length;

    for (let i = 0; i < n; ++i) {
        let j = i + 1;
        let k = n - 1;

        while (j < k) {
            const t = nums[i] + nums[j] + nums[k];

            if (t === target) {
                return t;
            }

            if (Math.abs(t - target) < Math.abs(answer - target)) {
                answer = t;
            }

            if (t > target) {
                --k;
            } else {
                ++j;
            }
        }
    }

    return answer;
};

// console.log(threeSumClosest([-1,2,1,-4], 1)); // 2
console.log(threeSumClosest([[0,0,0]], 1)); // 0
