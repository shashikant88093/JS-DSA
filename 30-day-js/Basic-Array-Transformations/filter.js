filter = function filter(arr, fn) {
   let filterarr =[]

   for(let i=0;i<arr.length;i++){
    if(fn(arr[i],i)){
        filterarr.push(arr[i])
    }
   }
   return filterarr
};

let arr = [0,10,20,30]
let fn = function greaterThan10(n) { return n > 10; }

console.log(filter(arr,fn))