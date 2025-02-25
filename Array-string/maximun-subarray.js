// let arr = [5,4,-1,7,8]

 
let arr = [5,4,-1,7,8]
// let arr = [-3, -2, 0, -1]


function Kadane(nums){

    let maxSum = nums[0]
    let sum =0
    for(let i=0;i<nums.length;i++){
        sum += nums[i]
        if(sum >maxSum){
           maxSum = sum
        }
        if(sum <0){
            sum =0
        }
    }
    return maxSum

}

console.log(Kadane(arr))