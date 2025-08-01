// Input: obj = [null, 0, false, 1]
// Output: [1]


function compact(obj) {

    if (obj === null) {
        return obj
    }
    if (typeof obj !== 'object') {
        return obj
    }

    if (Array.isArray(obj)) {
        return obj.filter(Boolean).map(compact)
    }

    let compacted = {}
    for (const char in obj) {
        let value = compact(obj[char])
        if (value) {
            compacted[char] = value
        }
    }
    return compacted
}
let obj
// obj = [null, , 0, false, 1]
obj = { "a": null, "b": [false, 1] }
// obj = [null, 0, 5, [0], [false, 16]]

console.log(compact(obj))