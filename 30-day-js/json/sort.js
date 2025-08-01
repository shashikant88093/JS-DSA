// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]

// ==========================================n^2 ======================================================
// worst case
function sorted(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (fn(arr[j]) > fn(arr[j + 1])) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]

            }
            console.log(arr, "arr")
        }
    }
    return arr
}


// =================================O(n)=====================================
function sorted1(arr, fn) {
 arr.sort((a, b) => fn(a) - fn(b));
}

let arr
let fn
// arr = [5, 4, 1, 2, 3], fn = (x) => x
arr = [{ "x": 1 }, { "x": 0 }, { "x": -1 }], fn = (d) => d.x
console.log(sorted(arr, fn))
// console.log(sorted1(arr, fn))