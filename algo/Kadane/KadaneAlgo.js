function Kadane(arrlist) {

    let maxSum = 0
    let currSum = 0
    let n = arrlist.length - 1
    let start = 0
    let end = 0

    for (let i = 0; i <= n; i++) {
        maxSum = maxSum + Number(arrlist[i])
        if (maxSum > currSum) {
            currSum = maxSum
        }

        if (maxSum < 0) {
            maxSum = 0
        }


    }

    return {
        maxSum
    }
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// let arr = [-4,-5,-3,-2,-1]
console.log(Kadane(arr));
