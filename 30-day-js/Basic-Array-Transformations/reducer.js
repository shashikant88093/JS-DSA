function reduce(nums, fn, init) {
    let hasInitial = init !== undefined;
    let startIndex = hasInitial ? 0 : 1;
    let acc = hasInitial ? init : nums[0];
    for (let i = startIndex; i < nums.length; i++) {
        acc = fn(acc, nums[i], i, nums);
    }
    return acc;
};


let nums = [1, 2, 3, 4]
let fn = function sum(accum, curr) { return accum + curr; }
let init = 0


console.log(reduce(nums, fn, init))