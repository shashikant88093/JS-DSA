function chunk(arr, size) {
    let sizeCount = Math.ceil(arr.length/size)
    let newArr=[] 
    for (let i = 0; i < sizeCount ;i++) {
      let start =  i * size
      let end = start + size
      let pair = arr.slice(start,end)
      newArr.push(pair)
    }
return newArr
}

let arr = [1, 2, 3, 4, 5]
let size = 1
 
console.log(chunk(arr, size))