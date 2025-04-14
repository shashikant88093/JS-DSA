function Kadane(arrlist) {
    let maxSum = -Infinity;
    let currentSum = 0;
    let start = 0;
    let tempStart = 0;
    let end = 0;
    let maxSubArray = [];

    for (let i = 0; i < arrlist.length; i++) {
        currentSum += arrlist[i];

        if (currentSum > maxSum) {
            maxSum = currentSum;
            start = tempStart;
            end = i;
            maxSubArray = arrlist.slice(start, end + 1);
        }

        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }

    return { maxSum, maxSubArray, maxSubArrayIndex: [start, end + 1] };
}

let arr = [-2,1,-3,4,-1,2,1,-5,4];
console.log(Kadane(arr));
