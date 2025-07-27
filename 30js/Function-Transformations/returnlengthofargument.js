function lengthArg(...args) {
    return [...args].length
};

console.log(lengthArg([5]))
console.log(lengthArg([{}, null, "3"]))