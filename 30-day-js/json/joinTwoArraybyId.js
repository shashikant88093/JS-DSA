

function joinTwoArray(arr1, arr2) {
 const obj = {}
    arr1.forEach(val=> obj[val.id] = val)
    arr2.forEach(val=> obj[val.id] = {...(obj[val.id]??{}),...val})
    return Object.values(obj);
}



let arr1, arr2;
// arr1 = [
//     { "id": 1, "x": 1 },
//     { "id": 2, "x": 9 }
// ],
//     arr2 = [
//         { "id": 3, "x": 5 }
//     ]
arr1 = [
    { "id": 1, "x": 2, "y": 3 },
    { "id": 2, "x": 3, "y": 6 }
],
    arr2 = [
        { "id": 2, "x": 10, "y": 20 },
        { "id": 3, "x": 0, "y": 0 }
    ]
console.log(joinTwoArray(arr1, arr2))
// Output:
// [
//     {"id": 1, "x": 1},
//     {"id": 2, "x": 9},
//     {"id": 3, "x": 5}
// ]

// Output:
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]