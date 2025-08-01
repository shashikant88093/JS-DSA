// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 0
// Output
// [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]


// Input
// arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
// n = 1
// Output
// [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]


function flattern(arr, n) {

    let newArr = []
    function help(arr, depth) {
        for (let i = 0; i < arr.length; i++) {
            if (typeof arr[i] === "object" && depth < n) {
                help(arr[i], depth + 1)

            } else {
                newArr.push(arr[i])
            }
        }
        return newArr
    }
    return help(arr, 0)

}
let arr
let n
arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]
n = 0

console.log(flattern(arr, n))