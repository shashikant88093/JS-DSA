


// let arr = [5,4,-1,7,8]

 
// let arr = [5,4,-1,7,8]
let arr = [-3, -2, 0, -1]

// =================== brute force solution ======================================

// function maxSubArray(nums) {
//     let maxSum = nums[0]
//     let startIndex =0
//     let endIndex = 0

//     for(let i=0;i<nums.length;i++){
//         let currentSum = 0
//         for(let j=i;j<nums.length;j++){
//             currentSum = currentSum + nums[j]
//             if(currentSum > maxSum){
//                 maxSum = currentSum
//                 startIndex =i
//                 endIndex = j
//             }
//         }
//     }
//     return {
//         sum:maxSum,
//         subArry : nums.slice(startIndex,endIndex + 1)
//     }

// }

// console.log(maxSubArray(arr))


// ====================Kadane Algo =====================================


function Kadane(nums) {

    let sum = 0;
    let max = nums[0]; // Start with the first element

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (sum > max) {
            max = sum;
        }

        if (sum < 0) {
            sum = 0; // Reset sum if it becomes negative
        }
    }

    return max;
}


console.log(Kadane(arr))



// =======================DP====================

var maxSubArray = function(nums) {
    // Initialize the max sum...
    let maxSum = nums[0];
    // Traverse all the element through the loop...
    for (let i = 1; i < nums.length; i++) {
        // nums[i] represents the largest sum of all subarrays ending with index i...
        // then its value should be the larger one between nums[i]...
        // nums[i-1] + nums[i] (largest sum plus current number with using prefix)...
        // calculate nums[0], nums[1]…, nums[n] while comparing each one with current largest sum...
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        // if nums[i] > maxSum then maxSum = nums[i]...
        if (nums[i] > maxSum)
            maxSum = nums[i];
    }
    return maxSum;      // return the contiguous subarray which has the largest sum...
};
