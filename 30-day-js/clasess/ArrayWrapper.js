

function ArrayWrapper(nums) {
    this.nums = nums


}


ArrayWrapper.prototype.valueOf = function () {
    let newArray = []
    let num = this.nums

    // by using reduce 
    function helper(num, depth) {
        for (let i = 0; i < num.length; i++) {
            if (typeof num[i] == 'object') {
                helper(num[i], depth + 1)
            } else {
                newArray.push(num[i])
            }
        }
        return helper
    }
    helper(num, 0)

    let sum = 0
    for (let i = 0; i < newArray.length; i++) {
        sum += newArray[i]
    }
    return sum
}

ArrayWrapper.prototype.toString = function () {
    return "[" + this.nums.join(",") + "]"

}

const wrapper = new ArrayWrapper([[1, 2], [3, 4]])

console.log(wrapper.valueOf())
console.log(wrapper.toString())