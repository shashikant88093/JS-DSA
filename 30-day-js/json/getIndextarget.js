

function getIndex(arr, x) {
    let mapped = new Map()
    for (let i = 0; i < arr.length; i++) {
        let comp = x - arr[i]
        if (mapped.has(comp)) {
            return [mapped.get(comp), i]
        }
        mapped.set(arr[i],i)
    }

}

let arr = [2, 7, 6, 9]

console.log(getIndex(arr, 15))