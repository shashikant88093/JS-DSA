function isEmpty(obj) {
 if(Object.keys(obj).length){
    return  false
} else{
    return true
}  
}
let obj = {"x": 5, "y": 42}

console.log(isEmpty(obj))