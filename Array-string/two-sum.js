// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]

function twoSum(nums,target){
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        let comp = target - nums[i]
        if(map.has(comp)){
            return [map.get(comp),i]
        }else{
            map.set(nums[i],i)
        }
    }

}
let arr = [2,7,11,15]

console.log(twoSum(arr,9))