function isEmpty(obj) {
    // console.log(Object.keys(obj).length > 0)
    return Object.keys(obj).length > 0
}
let obj = {"x": 5, "y": 42}

console.log(isEmpty(obj))