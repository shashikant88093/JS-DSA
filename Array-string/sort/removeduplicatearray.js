let arr = [1, 3, 2, 1, 5, 6, 9, 8, 8, 9];
for (let a = 0; a < arr.length; a++) {
    for (let b = 0; b < arr.length - 1; b++) {
        if (arr[b] > arr[b + 1]) {
            [arr[b], arr[b + 1]] = [arr[b + 1], arr[b]];
        }
    }
}
console.log(arr);

let newArr = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);
