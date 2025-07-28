
function counter(init){
    let count = init;
    return function(){
      return  count++
    }
}

console.log(counter(4)())