

Array.prototype.last = function(){
    console.log(this)
    if(this.length==0){
       return -1
    }
    return this[this.length -1]
}

 const arr = []
 const end = arr.last(); // 3

 console.log(end)